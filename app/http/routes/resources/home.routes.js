import { StreamController } from "../../controller/index.js";
import { StreamService } from "../../service/index.js";
import config from "../../../config/index.js";

const {
  pages: { homeHTML },
} = config;

const streamService = new StreamService();
const streamController = new StreamController(streamService);

const index = async (request, response) => {
  const { stream } = await streamController.getFileStream(homeHTML);

  response.writeHead(200, { "Content-Type": "text/html" });

  stream.pipe(response);
};

export default {
  GET: index,
};
