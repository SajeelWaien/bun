Bun.serve({
  async fetch(req) {
    const url = new URL(req.url);
    console.log(req.url);
    let filePath = url.pathname;

    // Default to index.html for the root path
    if (filePath === "/") {
      filePath = "/main.html";
    }

    const file = Bun.file(`.${filePath}`);

    if (await file.exists()) {
      return new Response(file);
    }

    return new Response("404 Not Found", { status: 404 });
  },
  port: 3009,
});