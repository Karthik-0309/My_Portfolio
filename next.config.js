/** @type {import('next').NextConfig} */

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig = {
  reactStrictMode: true,
  basePath: isGitHubPages ? "/My_Portfolio" : "",
  assetPrefix: isGitHubPages ? "/My_Portfolio/" : "",
  output: "export", // Required for GitHub Pages
};

module.exports = nextConfig;
