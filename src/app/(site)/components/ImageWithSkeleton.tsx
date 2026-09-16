"use client";

import { useState } from "react";
import Image, { type ImageProps } from "next/image";

type Props = ImageProps & { wrapperClassName?: string };

export default function ImageWithSkeleton({
  wrapperClassName = "",
  className = "",
  fill,
  width,
  height,
  ...props
}: Props) {
  const [loaded, setLoaded] = useState(false);

  return (
    <span
      className={`${fill ? "absolute inset-0" : "relative inline-block"} ${wrapperClassName}`}
      style={!fill ? { width, height } : undefined}
    >
      <span
        aria-hidden
        className={`absolute inset-0 animate-pulse rounded-[inherit] bg-white/10 transition-opacity duration-500 ${
          loaded ? "opacity-0" : "opacity-100"
        }`}
      />
      <Image
        {...props}
        fill={fill}
        width={width}
        height={height}
        className={`${className} transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
        onLoad={() => setLoaded(true)}
      />
    </span>
  );
}
