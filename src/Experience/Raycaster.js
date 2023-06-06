import Experience from "./Experience";
import * as THREE from "three";
import Service from "./Utils/Service";

export default class Raycaster {
  constructor() {
    this.service = new Service();
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.camera = this.experience.camera.instance;
    this.objectsToRayCaster = [];
    this.hoverPoint = false;
    this.mouse = {};

    this.setInstance();

    this.service.objectsToRayCaster$.subscribe((objectsToRayCaster) => {
      this.objectsToRayCaster = objectsToRayCaster;
    });
    this.service.mouseMove$.subscribe((mouse) => {
      this.mouseMove(mouse);
    });
    this.service.mouseClick$.subscribe(() => {
      this.mouseClick();
    });
  }

  setInstance() {
    this.instance = new THREE.Raycaster();
    const ranOrigin = new THREE.Vector3(2, 0, 10);
    const rayDirection = new THREE.Vector3(10, 0, 0);
    rayDirection.normalize();
    this.instance.set(ranOrigin, rayDirection);
  }

  mouseMove(mouse) {
    this.mouse = mouse;
    this.instance.setFromCamera(
      { x: this.mouse.x * 2, y: this.mouse.y * 2 },
      this.camera
    );
    if (this.objectsToRayCaster.length) {
      const intersects = this.instance.intersectObjects(
        this.objectsToRayCaster
      );
      console.log(intersects);
      if (intersects.length) {
        this.hoverPoint = intersects[0];
      } else {
        this.hoverPoint = false;
      }
    }
  }
  mouseClick() {
    if (this.hoverPoint) {
      let timer = setInterval(() => {
        if (this.camera.fov >= 25) {
          this.camera.fov -= 1;
        } else {
          this.camera.fov = 75;
          this.experience.word.boll.setInsideTexture()
          clearInterval(timer);
        }
        this.camera.updateProjectionMatrix();
      }, 10);
    }
  }
  tick() {
    this.instance.setFromCamera(
      { x: this.mouse.x * 2, y: this.mouse.y * 2 },
      this.camera
    );
    if (this.objectsToRayCaster.length) {
      const intersects = this.instance.intersectObjects(
        this.objectsToRayCaster
      );
      if (intersects.length) {
        this.hoverPoint = intersects[0];
      } else {
        this.hoverPoint = false;
      }
    }
  }
}
