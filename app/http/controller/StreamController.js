export class StreamController {
  constructor(audioStreamService) {
    this.service = audioStreamService;
  }

  async getFileStream(filename) {
    return this.service.getFileStream(filename);
  }
}
