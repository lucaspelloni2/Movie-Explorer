export class Film {
  constructor(data = {}) {
    this.title = null;
    this.year = null;
    this.group = null;
    this.container = null;
    this.excess = null;
    this.codec = null;
    Object.assign(this, data);
  }
}