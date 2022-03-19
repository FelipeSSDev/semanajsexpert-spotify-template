import server from "./http/server/index.js";
import { logger } from "./util/logger.js";

const PORT = 3000;

server.listen(PORT).on("listening", () => {
  logger.info(`server running on port ${PORT}`);
});
