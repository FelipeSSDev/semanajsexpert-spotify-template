import { StreamController } from "../../controller/index.js";
import { StreamService } from "../../service/index.js";

const streamService = new StreamService();
const streamController = new StreamController(streamService);

const index = async (request, response) => {
  const { url } = request;

  const { stream } = await streamController.getFileStream(url);

  stream.pipe(response);
};

export default {
  GET: index,
};
