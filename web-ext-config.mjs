export default {
  build: {
    filename: "auto-hide-github-whitespace-{version}.zip",
  },
  ignoreFiles: [
    "package.json",
    "package-lock.json",
    "web-ext-config.mjs",
    "plans/*.md",
    "README.md",
    ".gitignore",
  ],
};
