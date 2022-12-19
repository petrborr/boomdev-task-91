import EventEmitter from "eventemitter3";

export default class Beat extends EventEmitter{
  static get events() {
    return {
      BIT: "bit",
    };
  }

  constructor() {
    super()
    // this.on(Beat.events.BIT, () => console.log("event called"))
    setInterval(() => {
      console.log("bit");
      this.emit(Beat.events.BIT)
    }, 600);
  }
}
