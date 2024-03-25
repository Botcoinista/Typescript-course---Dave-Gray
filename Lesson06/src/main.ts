class Coder {

    secondLAng!: string 

    constructor(
        public readonly name: string,
        public music: string,
        private age: number,
        protected lang: string = "TypeScript"
    ) {
        this.name = name
        this.music = music
        this.age = age
        this.lang = lang
    }

    public getAge() {
        return `Hello, I´m ${this.name} I play ${this.music} guitar and I´m ${this.age} years old.`
    }
}


const Josef = new Coder("Josef", "Acoustic", 35)
console.log(Josef.getAge())
// console.log(Josef.age)
// console.log(Josef.lang)


const nameElement = document.querySelector(".name") 
const detailsElement = document.querySelector(".details")

nameElement!.innerHTML = Josef.name
detailsElement!.innerHTML = Josef.getAge() + ` I love ${Josef.music} music.`;

console.log(nameElement)


class WebDev extends Coder {
    constructor(public computer: string,
        name: string,
        music: string,
        age: number,
    ) { 
            super(name, music, age)
            this.computer = computer
    }

    public getLang() {
        return `I write code in ${this.lang}`
    }
}

const Sara = new WebDev("MacBook", "Sara", "Pop", 25)
console.log(Sara.getLang())


// console.log(Sara.age)
// console.log(Sara.lang)
//////////////////////////////////////////////////////

interface Musician {
    name: string
    instrument: string
    play(action: string): string
}

class Guitarist implements Musician {
   name: string
   instrument: string;

   constructor(name: string, instrument: string) {
    this.name = name
    this.instrument = instrument
   }

   play(action: string): string {
       return `${this.name} ${action} the ${this.instrument}`
   }
}

const Page = new Guitarist("Jimmy", "guitar")
console.log(Page.play("strums"))
////////////////////////////////////////////////////////

class Peeps {
    static count: number = 0

    static getCount(): number {
        return Peeps.count
    }

    public id: number

    constructor(public name: string) {
        this.name = name
        this.id = ++Peeps.count
    }
}


const John = new Peeps("John")
const Steve = new Peeps("Steve")
const Amy = new Peeps("Amy")

console.log(John.id)
console.log(Amy.id)
console.log(Steve.id)
console.log(Peeps.count)
/////////////////////////////////////////////////////////

class Bands {
    private dataState: string[]

    constructor() {
        this.dataState = []
    }

    public get data(): string[] {
        return this.dataState
    }

    public set data(value: string[]) {
        if (Array.isArray(value) && value.every(element => typeof element === "string")) {
            this.dataState = value
            return
        } else throw new Error("Param is not an array of strings")
    }
}

const myBands = new Bands()
myBands.data = ["Led Zeppelin", "The Beatles", "The Rolling Stones"]
console.log(myBands.data)
myBands.data = [...myBands.data, "The Doors"]
console.log(myBands.data)
myBands.data = ["Van Halen"]
