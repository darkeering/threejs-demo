import Experience from "../Experience";
import Environment from "./Environment";
import Boll from "./Boll";
import Point from "./Point";
import Service from "../Utils/Service";

export default class Word {
  constructor() {
    this.service = new Service()
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.objectsToRayCaster = []

    this.service.resourcesReady$.subscribe(() => {
      this.boll = new Boll()
      this.point = new Point()
      this.objectsToRayCaster.push(this.point.pointMesh)
      this.service.objectsToRayCaster$.next(this.objectsToRayCaster)
    })

    
    this.environment = new Environment()
  }
}
