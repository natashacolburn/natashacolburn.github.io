const BASE_PATH = "./public";
Bun.serve({
  port: 3000,
  async fetch(req) {
    let pathname = new URL(req.url).pathname;
    console.log(pathname);
    let [name, type] = pathname.split(".");
    name = name == "/" ? "/index" : name;
    type ??= "html";
    pathname = name + "." + type;

    const filePath = BASE_PATH + pathname;
    console.log(filePath);
    const file = Bun.file(filePath);
    return new Response(file);
  },
  error() {
    return new Response(null, { status: 404 });
  },
});
