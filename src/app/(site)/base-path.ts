// next/image with images.unoptimized doesn't auto-prefix src with basePath the way
// next/link prefixes href, so image paths need this applied manually.
export const basePath = process.env.GITHUB_ACTIONS ? "/jamiesocorro" : "";
