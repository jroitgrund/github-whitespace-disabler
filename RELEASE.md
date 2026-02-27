# Releasing a New Version

## Prerequisites (one-time setup)

1. Generate AMO API credentials at
   [addons.mozilla.org/en-US/developers/addon/api/key/](https://addons.mozilla.org/en-US/developers/addon/api/key/)

2. Create a `.env` file in the project root (already gitignored):
   ```
   AMO_API_KEY=user:12345678:999
   AMO_API_SECRET=abc123...
   ```

3. Install dependencies:
   ```sh
   npm install
   ```

## Release Process

1. **Make and commit your changes.**

2. **Bump the version** in `manifest.json` — AMO rejects submissions that
   reuse an existing version number:
   ```json
   "version": "1.3.0"
   ```

3. **Commit the version bump:**
   ```sh
   git add manifest.json
   git commit -m "chore: bump version to 1.3.0"
   ```

4. **Submit to AMO:**
   ```sh
   npm run release
   ```
   This builds the extension and submits it to AMO for review. The signed
   artifact is also saved to `web-ext-artifacts/`.

5. **Wait for AMO review.** Listed extensions go through a human review
   before they are published. You will receive an email when the review
   is complete.
