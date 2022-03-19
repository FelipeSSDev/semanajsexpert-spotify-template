import { logger, errorHandler } from "../../util/index.js";
import routesDictionary from "./dictionary.js";

const routes = async (request, response) => {
  const { method, url } = request;
  const existingUrl = routesDictionary[url];
  const existingMethod = existingUrl?.[method];

  if (!existingUrl) {
    if (method === "GET") {
      return routesDictionary.staticFiles.GET(request, response);
    }

    logger.error(`${method} ${url} not found`);

    response.writeHead(404);
    return response.end();
  }

  existingMethod(request, response);
};

export const handler = (request, response) => {
  return routes(request, response).catch((error) =>
    errorHandler(error, response)
  );
};
