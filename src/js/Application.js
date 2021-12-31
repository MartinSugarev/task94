import EventEmitter from "eventemitter3";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();
    this.emojis = [];
    this.banana = "🍌";
    this.emit(Application.events.READY);
  }
  setEmojis(emojis) {
    this.emojis = emojis;
    let par = document.createElement("p")
    par.textContent = emojis;
    let el = document.getElementById("emojis")
    el.appendChild(par);
  }

  addBananas() {
    let newArr = this.emojis.map(el =>  el + ' ' + this.banana);
     this.emojis = newArr
  }
}
