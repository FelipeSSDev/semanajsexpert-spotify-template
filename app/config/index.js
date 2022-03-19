import { dirname, join } from "path";
import { fileURLToPath } from "url";
import.meta.url;

const currentDir = dirname(fileURLToPath(import.meta.url));
const root = join(currentDir, "../../");
const audioDir = join(root, "audio");
const publicDir = join(root, "public");

export default {
  port: process.env.PORT || 3000,
  dir: {
    root,
    audioDir,
    publicDir,
    songsDir: join(audioDir, "songs"),
    fxDir: join(audioDir, "fx"),
  },
  pages: {
    homeHTML: "home/index.html",
    controllerHTML: "controller/index.html",
  },
  location: {
    home: "/home",
  },
  constants: {
    CONTENT_TYPE: {
      ".html": "text/html",
      ".js": "text/javascript",
      ".css": "text/css",
    },
  },
};
