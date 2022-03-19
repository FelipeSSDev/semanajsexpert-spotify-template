import config from "./config/index.js";
import server from "./http/server.js";
import { logger } from "./util/logger.js";

const { port } = config;

server.listen(port).on("listening", () => {
  logger.info(`server running on port ${port}`);
});
