import config from "../../../config/index.js";
import { StreamController } from "../../controller/index.js";
import { StreamService } from "../../service/index.js";

const {
  constants: { CONTENT_TYPE },
} = config;

const streamService = new StreamService();
const streamController = new StreamController(streamService);

const index = async (request, response) => {
  const { url, type } = request;

  const { stream } = await streamController.getFileStream(url);

  response.writeHead(200, CONTENT_TYPE[type]);
  stream.pipe(response);
};

export default {
  GET: index,
};
