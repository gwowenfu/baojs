import Bao from "baojs";

const app = new Bao();
const port = parseInt(process.env.PORT || "8080");

app.get("/", (ctx) => {
  return ctx.sendText("__ Hello world from Bao.js running on Railway! __");
});

const server = app.listen({ port: port });
console.log(`Server listening on ${server.hostname}:${port}`);



// const server = Bun.serve({
//   port: 3000,
//   fetch(req) {
//     return new Response("Bun!");
//   },
// });

// console.log(`Listening on http://localhost:${server.port} ...`);
