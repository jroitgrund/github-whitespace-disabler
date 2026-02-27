export default {
  ...(process.env.AMO_API_KEY && process.env.AMO_API_SECRET
    ? { sign: { apiKey: process.env.AMO_API_KEY, apiSecret: process.env.AMO_API_SECRET } }
    : {}),
  build: {
    filename: "auto-hide-github-whitespace-{version}.zip",
  },
  ignoreFiles: [
    "package.json",
    "package-lock.json",
    "web-ext-config.mjs",
    ".env",
    ".amo-upload-uuid",
    "plans/*.md",
    "README.md",
    "RELEASE.md",
    ".gitignore",
  ],
};
