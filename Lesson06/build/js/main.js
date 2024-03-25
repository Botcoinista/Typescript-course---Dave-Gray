"use strict";
class Coder {
    constructor(name, music, age, lang = "TypeScript") {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `Hello, I´m ${this.name} I play ${this.music} guitar and I´m ${this.age} years old.`;
    }
}
const Josef = new Coder("Josef", "Acoustic", 35);
console.log(Josef.getAge());
// console.log(Josef.age)
// console.log(Josef.lang)
const nameElement = document.querySelector(".name");
const detailsElement = document.querySelector(".details");
nameElement.innerHTML = Josef.name;
detailsElement.innerHTML = Josef.getAge() + ` I love ${Josef.music} music.`;
console.log(nameElement);
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I write code in ${this.lang}`;
    }
}
const Sara = new WebDev("MacBook", "Sara", "Pop", 25);
console.log(Sara.getLang());
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const Page = new Guitarist("Jimmy", "guitar");
console.log(Page.play("strums"));
////////////////////////////////////////////////////////
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const John = new Peeps("John");
const Steve = new Peeps("Steve");
const Amy = new Peeps("Amy");
console.log(John.id);
console.log(Amy.id);
console.log(Steve.id);
console.log(Peeps.count);
/////////////////////////////////////////////////////////
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every(element => typeof element === "string")) {
            this.dataState = value;
            return;
        }
        else
            throw new Error("Param is not an array of strings");
    }
}
const myBands = new Bands();
myBands.data = ["Led Zeppelin", "The Beatles", "The Rolling Stones"];
console.log(myBands.data);
myBands.data = [...myBands.data, "The Doors"];
console.log(myBands.data);
myBands.data = ["Van Halen"];
