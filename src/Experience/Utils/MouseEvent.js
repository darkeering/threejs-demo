import Experience from "../Experience";
import Service from "./Service";

export default class MouseEvent {
  constructor() {
    this.service = new Service()
    this.experience = new Experience();
    this.sizes = this.experience.sizes;
    this.mouse = {
      x: 0,
      y: 0,
    };
    window.addEventListener("mousemove", (event) => {
      this.mouse.x = event.clientX / this.sizes.width - 0.5;
      this.mouse.y = -event.clientY / this.sizes.height + 0.5;
      this.service.mouseMove$.next(this.mouse)
    });

    window.addEventListener("mousedown", (event) => {
      event.preventDefault();
      this.service.mouseDown$.next(this.mouse)
    });
    window.addEventListener("mouseup", (event) => {
      event.preventDefault();
      this.service.mouseUp$.next('mouseUp')
    });
    window.addEventListener("click", (event) => {
      this.service.mouseClick$.next('mouseClick')
    });
  }
}
