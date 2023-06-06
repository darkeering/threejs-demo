import Experience from "../Experience";
import * as THREE from "three";

export default class Boll {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;

    this.setMesh();
  }

  setMesh() {
    const bollGeometry = new THREE.SphereGeometry(500, 60, 60);
    bollGeometry.scale(1, 1, -1);

    const outsideTexture = this.resources.items.outside;

    const bollMaterial = new THREE.MeshBasicMaterial({
      map: outsideTexture,
    });

    this.bollMesh = new THREE.Mesh(bollGeometry, bollMaterial);
    this.scene.add(this.bollMesh);
  }

  setInsideTexture() {
    const insiderTexture = this.resources.items.inside;
    const bollMaterial = new THREE.MeshBasicMaterial({
      map: insiderTexture,
    });
    this.bollMesh.material = bollMaterial;
  }
}
