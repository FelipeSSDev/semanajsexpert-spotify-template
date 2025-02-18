import home from "./resources/home.routes.js";
import controller from "./resources/controller.routes.js";
import staticFiles from "./resources/static.routes.js";
import defaultPath from "./resources/default.routes.js";

export default {
  "/": { ...defaultPath },
  "/home": { ...home },
  "/controller": { ...controller },
  staticFiles: {...staticFiles}
};
