import Service from "./Service"

export default class Time{
  constructor() {
    this.service = new Service()
    this.start = Date.now()
    this.current = this.start
    this.elapsed = 0
    this.delta = 16
    this.tick()
  }

  tick() {
    const currentTime = Date.now()
    this.delta = currentTime - this.current
    this.current = currentTime
    this.elapsed = currentTime - this.start

    this.service.tickUpdate$.next('tick')

    window.requestAnimationFrame(() => {
      this.tick()
    })
  }
}