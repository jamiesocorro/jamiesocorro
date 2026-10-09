"use client";

import { useState } from "react";

export default function LeaveReviewButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-[#0a0f1c] shadow-lg transition-transform hover:-translate-y-0.5 hover:shadow-xl"
      >
        Leave a Google Review
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-6"
          onClick={() => setOpen(false)}
        >
          <div
            className="max-w-sm rounded-2xl border border-white/10 bg-[#0a0f1c] p-6 text-center shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-lg font-semibold text-white">Under maintenance</h3>
            <p className="mt-2 text-sm text-white/60">
              Reviews are still being set up. Please check back soon.
            </p>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="mt-5 inline-flex items-center justify-center rounded-full bg-white/10 px-5 py-2 text-sm font-medium text-white hover:bg-white/20"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
