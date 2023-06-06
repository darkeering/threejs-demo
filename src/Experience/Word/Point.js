import Experience from "../Experience";
import * as THREE from "three";

export default class Point {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;

    this.setGeometry();
    this.setTexture();
    this.setMaterial();
    this.setMesh();
  }

  setGeometry() {
    this.pointGeometry = new THREE.BoxGeometry(2, 2, 2);
  }

  setTexture() {
    this.pointTexture = this.resources.items.point;
  }

  setMaterial() {
    this.pointMaterial = new THREE.MeshBasicMaterial({
      map: this.pointTexture,
    });
  }

  setMesh() {
    this.pointMesh = new THREE.Mesh(this.pointGeometry, this.pointMaterial);
    this.pointMesh.position.set(2, 1.5, 36);
    this.scene.add(this.pointMesh);
  }
}
