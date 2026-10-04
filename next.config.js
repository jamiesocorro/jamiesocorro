const nextConfig = {
  output: "export", // <=== enables static exports
  reactStrictMode: true,
  trailingSlash: true,
  // GitHub Pages serves this repo at jamiesocorro.github.io/jamiesocorro/, not the domain root —
  // basePath makes every next/link and next/image reference resolve under that subpath in production.
  basePath: process.env.GITHUB_ACTIONS ? "/jamiesocorro" : "",
  images: {
    unoptimized: true, // Disables image optimization for static exports
  },
  turbopack: {
    root: __dirname, // pin the workspace root; an unrelated lockfile in the home dir was confusing auto-detection
  },
};

module.exports = nextConfig;
