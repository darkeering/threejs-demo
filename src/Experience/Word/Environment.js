import * as THREE from "three";
import Experience from "../Experience";

export default class Environment {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;

    // this.setLight();
  }

  setLight() {
    const sunLight = new THREE.DirectionalLight(0xffffff, 4);
    sunLight.castShadow = true;
    sunLight.shadow.camera.far = 15;
    sunLight.shadow.mapSize.set(1024, 1024);
    sunLight.shadow.normalBias = 0.05;
    sunLight.position.set(3.5, 2, -1.25);
    this.sunLight = sunLight
    this.scene.add(sunLight)
  }
}
