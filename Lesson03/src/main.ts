let stringArr = ["one", "two", "three"]

let guitars = ["Strat", "Les Paul", 5150]

let mixedData = ["EVH", 1984, true]

stringArr[0] = "josef"
stringArr.push("hey")

console.log(stringArr)

guitars[0] = 1984
guitars.unshift("Jim")
console.log(guitars)


let test = []
let bands: string[] = []
bands.push("Van Halen", "Pointing Arrows")
console.log(bands)

// Tuple
let myTuple: [string, number, boolean] = ["Josef", 1989, true]

let mixed = ["Josef", 1, false]


myTuple[1] = 198

let myObj: object
myObj = []
myObj = guitars

console.log(typeof myObj)

const exampleObj = {
    prop1: "Josef",
    prop2: true,
}

exampleObj.prop2 = false

interface Guitarist {
    name?: string,
    active: boolean,
    albums: (string | number )[]
    age: number 
}

let evh: Guitarist = {
    name: "Eddie Van Halen",
    active: false,
    albums: [1984, 5150, "A Different Kind of Truth"],
    age: 65
}

let jp: Guitarist = {
    // name: "Jimmy",
    active: true,
    albums: ["I", "II", "IV"],
    age: 69
}

const greetGuitarist = (guitarist: Guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()}!`
    }
    return "Hello!"
}

console.log(greetGuitarist(evh))


//Enums   

enum Grade {
    U = 1,
    D,
    C,
    B,
    A,
}

console.log(Grade.U)