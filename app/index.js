import server from "./server/index.js";

const PORT = 3000;

server.listen(PORT).on("listening", () => {
  console.log(`server running on port ${PORT}`);
});
