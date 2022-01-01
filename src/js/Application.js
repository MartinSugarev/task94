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
<<<<<<< HEAD
    let el = document.querySelector('#emojis')
    par.textContent = '';
     let newPAr = this.emojis.map( el => par.textContent = par.textContent + ' ' + el)
    //let newArr = this.emojis.map(el =>  el + ' ' + this.banana);
    par.textContent = newPAr;
    
=======
    par.textContent = this.emojis;
    let el = document.getElementById("emojis")
>>>>>>> dev
    el.appendChild(par);
  }

  addBananas() {
    let newArr = this.emojis.map(el =>  el + ' ' + this.banana);
    this.emojis = newArr

    let par = document.getElementsByTagName("p")
    par[0].remove()

    let p = document.createElement("p")
    p.textContent = this.emojis;
    let el = document.getElementById("emojis")
    el.appendChild(p);
  }
}
