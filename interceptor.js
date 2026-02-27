function redirectUrl(details) {
    var url = new URL(details.url);
    if (url.searchParams.has('w')) return;
    url.searchParams.set('w', 1);
    return url.href;
}

browser.webRequest.onBeforeRequest.addListener(
    (details) => {
        const url = redirectUrl(details);
        if (url) return { redirectUrl: url };
    },
    { urls: [
        "*://github.com/*/*/pull/*/files",
        "*://github.com/*/*/pull/*/changes"
    ]},
    ["blocking"]
);

browser.webNavigation.onHistoryStateUpdated.addListener(
    (details) => {
        const url = redirectUrl(details);
        if (url) browser.tabs.update(details.tabId, { url });
    },
    { url: [{ urlMatches: 'github\\.com/[^/]+/[^/]+/pull/\\d+/(files|changes)(\\?|$)' }] }
);
