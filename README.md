# Auto-Hide GitHub Whitespace

Firefox extension that forces GitHub to open PR diff pages with `?w=1` appended, hiding whitespace-only changes.

Works on both `/pull/*/files` and `/pull/*/changes` routes.

Install from [addons.mozilla.org](https://addons.mozilla.org/en-US/firefox/addon/auto-hide-github-whitespace/).

## Development

```sh
npm install
npm run dev    # launch Firefox with extension loaded (auto-reloads on save)
npm run build  # produce a .zip in web-ext-artifacts/ for AMO upload
npm run lint   # validate manifest and extension
```

## Attribution

Forked from [olivermaksimovic/github-whitespace-disabler](https://github.com/olivermaksimovic/github-whitespace-disabler), itself inspired by the Chrome extension [kemo/github-whitespace-disabler](https://github.com/kemo/github-whitespace-disabler).
