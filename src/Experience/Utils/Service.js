import { Subject } from "rxjs";

let instance = null;

export default class Service {
  constructor() {
    if (instance) {
      return instance;
    }
    instance = this;

    this.sizesUpdate$ = new Subject();
    this.tickUpdate$ = new Subject();
    this.resourcesReady$ = new Subject();
    this.mouseDown$ = new Subject();
    this.mouseUp$ = new Subject();
    this.mouseMove$ = new Subject();
    this.mouseClick$ = new Subject();

    this.objectsToRayCaster$ = new Subject()
  }
}
