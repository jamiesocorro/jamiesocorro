"use client";

import { useState } from "react";
import { basePath } from "../base-path";

export default function HeroVideo() {
  const [muted, setMuted] = useState(true);

  return (
    <div className="relative h-full w-full overflow-hidden">
      <video
        src={`${basePath}/OnePickleballAds.mp4`}
        autoPlay
        loop
        muted={muted}
        playsInline
        className="h-full w-full object-cover object-[22%_18%]"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0f1c] lg:bg-gradient-to-r lg:to-[#0a0f1c]" />

      <button
        type="button"
        onClick={() => setMuted((m) => !m)}
        aria-label={muted ? "Unmute video" : "Mute video"}
        className="absolute bottom-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white/80 backdrop-blur-sm transition-colors hover:border-white/40 hover:text-white"
      >
        {muted ? (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M11 5 6 9H2v6h4l5 4V5Z" />
            <path d="M23 9l-6 6M17 9l6 6" />
          </svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M11 5 6 9H2v6h4l5 4V5Z" />
            <path d="M15.5 8.5a5 5 0 0 1 0 7M19 5a10 10 0 0 1 0 14" />
          </svg>
        )}
      </button>
    </div>
  );
}
