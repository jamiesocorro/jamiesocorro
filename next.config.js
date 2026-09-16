const nextConfig = {
  output: "export", // <=== enables static exports
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    unoptimized: true, // Disables image optimization for static exports
  },
  turbopack: {
    root: __dirname, // pin the workspace root; an unrelated lockfile in the home dir was confusing auto-detection
  },
};

module.exports = nextConfig;
