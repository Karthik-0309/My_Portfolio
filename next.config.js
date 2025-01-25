/** @type {import('next').NextConfig} */

// Check if running in GitHub Actions
const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

// Define the base Next.js configuration
const nextConfig = {
  reactStrictMode: true,
  // Set basePath and assetPrefix for GitHub Pages
  basePath: isGitHubPages ? "/My_Portfolio" : "",
  assetPrefix: isGitHubPages ? "/My_Portfolio/" : "",
  // Ensure output is set for static export (required for GitHub Pages)
  output: "export",
};

// Conditionally include PWA support
if (!isGitHubPages) {
  const withPWA = require("next-pwa")({
    dest: "public",
    register: true,
    skipWaiting: true,
    // Disable PWA in development
    disable: process.env.NODE_ENV === "development",
  });
  module.exports = withPWA(nextConfig);
} else {
  module.exports = nextConfig;
}
