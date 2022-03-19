import config from "../../../config/index.js";

const { location } = config;

const redirect = (request, response) => {
  response.writeHead(302, { Location: location.home });

  response.end();
};

export default {
  GET: redirect,
};
