/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development" || process.env.GITHUB_ACTIONS === "true", // Disable PWA in development and GitHub Pages
});

// Determine if the app is being built for GitHub Pages
const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig = {
  reactStrictMode: true,
  basePath: isGitHubPages ? "/My_Portfolio" : "", // Set basePath for GitHub Pages
  assetPrefix: isGitHubPages ? "/My_Portfolio/" : "", // Set assetPrefix for static assets
};

module.exports = withPWA(nextConfig);
