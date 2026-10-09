import LeaveReviewButton from "./LeaveReviewButton";

const API_KEY = process.env.GOOGLE_PLACES_API_KEY;
const PLACE_ID = process.env.GOOGLE_PLACE_ID;

type GoogleReview = {
  authorAttribution?: { displayName: string; photoUri?: string };
  rating: number;
  relativePublishTimeDescription: string;
  text?: { text: string };
};

type PlaceDetails = {
  rating?: number;
  userRatingCount?: number;
  reviews?: GoogleReview[];
};

async function fetchPlaceDetails(): Promise<PlaceDetails | null> {
  if (!API_KEY || !PLACE_ID) return null;
  try {
    const res = await fetch(`https://places.googleapis.com/v1/places/${PLACE_ID}`, {
      headers: {
        "X-Goog-Api-Key": API_KEY,
        "X-Goog-FieldMask": "rating,userRatingCount,reviews",
      },
    });
    if (!res.ok) return null;
    return (await res.json()) as PlaceDetails;
  } catch {
    return null;
  }
}

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

export default async function GoogleReviews() {
  const configured = Boolean(API_KEY && PLACE_ID);
  const place = configured ? await fetchPlaceDetails() : null;
  const reviews = place?.reviews ?? [];
  const rating = place?.rating ?? null;
  const total = place?.userRatingCount ?? null;

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

          {rating !== null && (
            <div className="mt-5 flex flex-col items-center gap-1.5">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-extrabold text-white">{rating.toFixed(1)}</span>
                <Stars rating={rating} />
              </div>
              {total !== null && <span className="text-xs text-white/40">Based on {total} Google reviews</span>}
            </div>
          )}

          <LeaveReviewButton />
        </div>

        {!configured && (
          <p className="mx-auto max-w-md text-center text-sm text-white/40">
            Reviews will show up here automatically once this is connected to Google.
          </p>
        )}

        {configured && !place && (
          <p className="mx-auto max-w-md text-center text-sm text-white/40">
            Couldn&apos;t load reviews right now. In the meantime, you can still leave one above.
          </p>
        )}

        {configured && place && reviews.length === 0 && (
          <p className="mx-auto max-w-md text-center text-sm text-white/40">
            No reviews yet — be the first to leave one above.
          </p>
        )}

        {configured && place && reviews.length > 0 && (
          <>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {reviews.slice(0, 6).map((r, i) => {
                const name = r.authorAttribution?.displayName ?? "Google user";
                return (
                  <div
                    key={i}
                    className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-6"
                  >
                    <div className="flex items-center gap-3">
                      {r.authorAttribution?.photoUri ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={r.authorAttribution.photoUri}
                          alt={name}
                          width={36}
                          height={36}
                          className="rounded-full"
                          referrerPolicy="no-referrer"
                        />
                      ) : (
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-xs font-bold text-white/70">
                          {name.charAt(0)}
                        </div>
                      )}
                      <div>
                        <div className="text-sm font-semibold text-white">{name}</div>
                        <div className="text-[11px] text-white/40">{r.relativePublishTimeDescription}</div>
                      </div>
                    </div>
                    <Stars rating={r.rating} />
                    <p className="line-clamp-5 text-[13px] leading-relaxed text-white/60">{r.text?.text}</p>
                  </div>
                );
              })}
            </div>
            <p className="mt-8 text-center text-[11px] text-white/30">Reviews via Google</p>
          </>
        )}
      </div>
    </section>
  );
}
