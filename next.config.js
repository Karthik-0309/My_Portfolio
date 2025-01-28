/** @type {import('next').NextConfig} */

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig = {
  reactStrictMode: true,
  basePath: isGitHubPages ? "/My_Portfolio" : "", // Ensure this matches your GitHub repository name
  assetPrefix: isGitHubPages ? "/My_Portfolio/" : "",
  output: "export", // Required for GitHub Pages
  trailingSlash: true, // Ensure all paths end with a slash for GitHub Pages compatibility
};

module.exports = nextConfig;

