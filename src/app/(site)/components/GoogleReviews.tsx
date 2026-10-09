"use client";

import { useEffect, useRef, useState } from "react";

const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
const PLACE_ID = process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID;

const reviewUrl = PLACE_ID
  ? `https://search.google.com/local/writereview?placeid=${PLACE_ID}`
  : "https://www.google.com/search?q=jamie+socorro";

type Review = {
  author_name: string;
  author_url?: string;
  profile_photo_url?: string;
  rating: number;
  relative_time_description: string;
  text: string;
};

// Minimal structural typing for the bits of the Maps JS SDK we use, so this
// component doesn't need the @types/google.maps package as a dependency.
type PlaceResult = {
  reviews?: Review[];
  rating?: number;
  user_ratings_total?: number;
};
type GoogleMapsNamespace = {
  maps: {
    Map: new (el: HTMLElement, opts: { center: { lat: number; lng: number }; zoom: number }) => unknown;
    places: {
      PlacesService: new (map: unknown) => {
        getDetails: (
          request: { placeId: string; fields: string[] },
          callback: (result: PlaceResult | null, status: string) => void
        ) => void;
      };
      PlacesServiceStatus: { OK: string };
    };
  };
};

declare global {
  interface Window {
    google?: GoogleMapsNamespace;
  }
}

type Status = "loading" | "ready" | "unconfigured" | "error";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 20 20"
          fill={i <= Math.round(rating) ? "#fbbf24" : "none"}
          stroke="#fbbf24"
          strokeWidth="1.2"
        >
          <path d="M10 1.5l2.6 5.3 5.9.8-4.3 4.1 1 5.8L10 14.7 4.8 17.5l1-5.8-4.3-4.1 5.9-.8L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

export default function GoogleReviews() {
  const [status, setStatus] = useState<Status>("loading");
  const [reviews, setReviews] = useState<Review[]>([]);
  const [rating, setRating] = useState<number | null>(null);
  const [total, setTotal] = useState<number | null>(null);
  const mapNodeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!API_KEY || !PLACE_ID) {
      setStatus("unconfigured");
      return;
    }

    function fetchPlace() {
      if (!window.google || !mapNodeRef.current) {
        setStatus("error");
        return;
      }
      const googleMaps = window.google;
      const map = new googleMaps.maps.Map(mapNodeRef.current, { center: { lat: 0, lng: 0 }, zoom: 1 });
      const service = new googleMaps.maps.places.PlacesService(map);
      service.getDetails(
        { placeId: PLACE_ID as string, fields: ["reviews", "rating", "user_ratings_total"] },
        (place, requestStatus) => {
          if (requestStatus === googleMaps.maps.places.PlacesServiceStatus.OK && place) {
            setReviews((place.reviews as unknown as Review[]) ?? []);
            setRating(place.rating ?? null);
            setTotal(place.user_ratings_total ?? null);
            setStatus("ready");
          } else {
            setStatus("error");
          }
        }
      );
    }

    if (window.google?.maps?.places) {
      fetchPlace();
      return;
    }

    const existing = document.getElementById("google-maps-script") as HTMLScriptElement | null;
    if (existing) {
      existing.addEventListener("load", fetchPlace);
      existing.addEventListener("error", () => setStatus("error"));
      return;
    }

    const script = document.createElement("script");
    script.id = "google-maps-script";
    script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&libraries=places`;
    script.async = true;
    script.onload = fetchPlace;
    script.onerror = () => setStatus("error");
    document.head.appendChild(script);
  }, []);

  return (
    <section className="border-t border-white/10 bg-[#0a0f1c] px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-emerald-300">
            Client Reviews
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            What clients say.
          </h2>

          {status === "ready" && rating !== null && (
            <div className="mt-5 flex flex-col items-center gap-1.5">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-extrabold text-white">{rating.toFixed(1)}</span>
                <Stars rating={rating} />
              </div>
              {total !== null && <span className="text-xs text-white/40">Based on {total} Google reviews</span>}
            </div>
          )}

          <a
            href={reviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-[#0a0f1c] shadow-lg transition-transform hover:-translate-y-0.5 hover:shadow-xl"
          >
            Leave a Google Review
          </a>
        </div>

        {status === "loading" && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[0, 1, 2].map((i) => (
              <div key={i} className="h-40 animate-pulse rounded-2xl border border-white/10 bg-white/[0.03]" />
            ))}
          </div>
        )}

        {status === "unconfigured" && (
          <p className="mx-auto max-w-md text-center text-sm text-white/40">
            Reviews will show up here automatically once this is connected to Google.
          </p>
        )}

        {status === "error" && (
          <p className="mx-auto max-w-md text-center text-sm text-white/40">
            Couldn&apos;t load reviews right now. In the meantime, you can still leave one above.
          </p>
        )}

        {status === "ready" && reviews.length > 0 && (
          <>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {reviews.slice(0, 6).map((r, i) => (
                <div
                  key={i}
                  className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-6"
                >
                  <div className="flex items-center gap-3">
                    {r.profile_photo_url ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={r.profile_photo_url}
                        alt={r.author_name}
                        width={36}
                        height={36}
                        className="rounded-full"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-xs font-bold text-white/70">
                        {r.author_name.charAt(0)}
                      </div>
                    )}
                    <div>
                      <div className="text-sm font-semibold text-white">{r.author_name}</div>
                      <div className="text-[11px] text-white/40">{r.relative_time_description}</div>
                    </div>
                  </div>
                  <Stars rating={r.rating} />
                  <p className="line-clamp-5 text-[13px] leading-relaxed text-white/60">{r.text}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-center text-[11px] text-white/30">Reviews via Google</p>
          </>
        )}

        <div ref={mapNodeRef} className="hidden" aria-hidden="true" />
      </div>
    </section>
  );
}
