"use client";

import { useEffect, useState } from "react";
import ImageWithSkeleton from "./ImageWithSkeleton";
import { basePath } from "../base-path";

export default function HeroVideo() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Play One Pickleball ad"
        className="group relative block h-full w-full cursor-pointer"
      >
        <ImageWithSkeleton
          src={`${basePath}/hero-image.png`}
          alt="Jamie Socorro"
          fill
          priority
          wrapperClassName="h-full w-full"
          className="object-cover object-[22%_18%] transition-transform duration-500 group-hover:scale-105"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0f1c] lg:bg-gradient-to-r lg:to-[#0a0f1c]" />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/10 transition-colors group-hover:bg-black/25">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 shadow-xl transition-transform duration-300 group-hover:scale-110 sm:h-20 sm:w-20">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="#0a0f1c" className="ml-1">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </div>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close video"
            className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/80 transition-colors hover:border-white/50 hover:text-white"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
          <video
            src={`${basePath}/OnePickleballAds.mp4`}
            controls
            autoPlay
            playsInline
            className="max-h-[85vh] w-full max-w-4xl rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
