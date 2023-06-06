import Sizes from "./Utils/Sizes";
import Time from "./Utils/Time";
import * as THREE from "three";
import Camera from "./Camera";
import Renderer from "./Renderer";
import Word from "./Word/Word";
import Resources from "./Utils/Resources";
import sources from "./Sources";
import MouseEvent from "./Utils/MouseEvent";
import Raycaster from "./Raycaster";
import Service from "./Utils/Service";

let instance = null;
export default class Experience {
  constructor(canvas) {
    if (instance) {
      return instance;
    }
    instance = this;

    this.service = new Service();

    this.canvas = canvas;

    this.sizes = new Sizes();
    this.scene = new THREE.Scene();
    this.resources = new Resources(sources);
    this.camera = new Camera();
    this.raycaster = new Raycaster();
    this.word = new Word();
    this.time = new Time();
    this.renderer = new Renderer();
    this.mouseEvent = new MouseEvent();
  }
}
