const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig = {
  reactStrictMode: true,
  basePath: isGitHubPages ? "/My_Portfolio" : "", // Ensure this matches your GitHub repository name
  assetPrefix: isGitHubPages ? "/My_Portfolio/" : "", // Matches repository name
  output: "export",
  trailingSlash: true, // Important for GitHub Pages to serve files correctly
};

module.exports = nextConfig;
