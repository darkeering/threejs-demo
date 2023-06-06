import Experience from "./Experience";
import * as THREE from "three";
import Service from "./Utils/Service";

export default class Renderer {
  constructor() {
    this.service = new Service()
    this.experience = new Experience();
    this.canvas = this.experience.canvas;
    this.sizes = this.experience.sizes;
    this.scene = this.experience.scene;
    this.camera = this.experience.camera;
    this.setInstance();

    this.service.sizesUpdate$.subscribe(() => {
      this.resize();
    })

    this.service.tickUpdate$.subscribe(() => {
      this.update();
    })
  }

  setInstance() {
    this.instance = new THREE.WebGLRenderer({ canvas: this.canvas });
    this.instance.setSize(this.sizes.width, this.sizes.height);
    this.instance.setPixelRatio(this.sizes.pixelRatio);
  }

  resize() {
    this.instance.setSize(this.sizes.width, this.sizes.height);
    this.instance.setPixelRatio(this.sizes.pixelRatio);
  }

  update() {
    this.instance.render(this.scene, this.camera.instance);
  }
}
