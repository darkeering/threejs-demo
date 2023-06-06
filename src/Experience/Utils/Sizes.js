import Service from "./Service";

export default class Sizes {
  constructor() {
    this.service = new Service()
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.pixelRatio = Math.min(window.devicePixelRatio, 2);

    window.addEventListener("resize", () => {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
      this.pixelRatio = Math.min(window.devicePixelRatio, 2);

      this.service.sizesUpdate$.next('resize')
    });
  }
}
