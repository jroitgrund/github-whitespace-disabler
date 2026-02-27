document.addEventListener("turbo:click", (event) => {
  const url = new URL(event.detail.url);

  if (url.searchParams.has("w")) return;

  const isDiffPage = /^\/[^/]+\/[^/]+\/pull\/\d+\/(files|changes)$/.test(
    url.pathname,
  );

  if (!isDiffPage) return;

  event.preventDefault();
  url.searchParams.set("w", "1");
  location.href = url.href;
});
