import { logger } from "../../util/index.js";
import routesDictionary from "./dictionary.js";

const routes = async (request, response) => {
  const { method, url } = request;
  const existingMethod = routesDictionary[url]?.[method];

  if (!existingMethod) {
    logger.error(`${method} ${url} not found`);

    return response.end();
  }

  existingMethod(request, response);
};

export const handler = (request, response) => {
  return routes(request, response).catch((error) =>
    logger.error(`Error: ${error.stack}`)
  );
};
