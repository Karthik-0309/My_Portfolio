/** @type {import('next').NextConfig} */

const isGitHubPages = process.env.GITHUB_ACTIONS === "true"; // Check if running in GitHub Actions

const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  // Disable PWA for development and GitHub Pages
  disable: process.env.NODE_ENV === "development" || isGitHubPages,
});

const nextConfig = {
  reactStrictMode: true,
  // Set basePath and assetPrefix for GitHub Pages
  basePath: isGitHubPages ? "/My_Portfolio" : "",
  assetPrefix: isGitHubPages ? "/My_Portfolio/" : "",
  // Ensure output is set for static export (required for GitHub Pages)
  output: "export",
};

module.exports = withPWA(nextConfig);
