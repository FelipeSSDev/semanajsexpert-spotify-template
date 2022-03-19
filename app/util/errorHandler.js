import { logger } from "./logger.js";

export const errorHandler = (error, response) => {
  if (error.message.includes("ENOENT")) {
    logger.warn(`asset not found ${error.stack}`);

    response.writeHead(404);
    return response.end();
  }

  logger.error(`An error happened in the API: ${error.stack}`);

  response.writeHead(500);
  response.end();
};
