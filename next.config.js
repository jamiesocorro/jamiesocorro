const nextConfig = {
  output: "export", // <=== enables static exports
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disables image optimization for static exports
  },
};

module.exports = nextConfig;
