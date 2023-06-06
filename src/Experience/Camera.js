import Experience from "./Experience";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Service from "./Utils/Service";

export default class Camera {
  constructor() {
    this.service = new Service()
    this.experience = new Experience();
    this.canvas = this.experience.canvas;
    this.sizes = this.experience.sizes;
    this.scene = this.experience.scene;
    this.setInstance();
    // this.setOrbitControls();

    this.service.sizesUpdate$.subscribe(() => {
      this.resize();
    })
    this.service.mouseDown$.subscribe((mouse) => {
      this.mouseDown(mouse);
    })
    this.service.mouseUp$.subscribe(() => {
      this.mouseUp();
    })
    this.service.mouseMove$.subscribe((mouse) => {
      this.mouseMove(mouse);
    })
  }

  setInstance() {
    this.instance = new THREE.PerspectiveCamera(
      75,
      this.sizes.width / this.sizes.height,
      1,
      1100
    );
    this.instance.position.set(2, 0, 10);
    this.instance.lookAt(0, 0, 0);
    this.scene.add(this.instance);
  }

  setOrbitControls() {
    this.controls = new OrbitControls(this.instance, this.canvas);
    this.controls.enableDamping = true;
  }

  resize() {
    this.instance.aspect = this.sizes.width / this.sizes.height;
    this.instance.updateProjectionMatrix();
  }

  mouseDown(mouse) {
    this.mousedownPosition = mouse.x;
    this.canRotate = true;
  }
  mouseUp() {
    this.canRotate = false;
  }
  mouseMove(mouse) {
    if (this.canRotate) {
      const x = mouse.x - this.mousedownPosition;
      this.mousedownPosition = mouse.x;
      this.instance.rotateY(x * Math.PI * 2);
    }
  }
}
