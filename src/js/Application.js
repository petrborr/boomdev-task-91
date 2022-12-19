import EventEmitter from "eventemitter3";
import Beat from "./Beat";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();
    const lyrics = ["Ah", "ha", "ha", "ha", "stayin' alive", "stayin' alive"];
    let count = 0;
    this._beat = new Beat()
    this._beat.on(Beat.events.BIT, () => {
      if (count < lyrics.length) {
        this._create(lyrics[count])
        count ++
      }
    })
    
    this.emit(Application.events.READY);
  }
  _create(word) {
    const message = document.createElement("div");
    message.classList.add("message");
    message.innerText = word;
    document.querySelector(".main").appendChild(message);
  }
}
