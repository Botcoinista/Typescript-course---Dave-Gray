"use strict";
let stringArr = ["one", "two", "three"];
let guitars = ["Strat", "Les Paul", 5150];
let mixedData = ["EVH", 1984, true];
stringArr[0] = "josef";
stringArr.push("hey");
console.log(stringArr);
guitars[0] = 1984;
guitars.unshift("Jim");
console.log(guitars);
let test = [];
let bands = [];
bands.push("Van Halen", "Pointing Arrows");
console.log(bands);
// Tuple
let myTuple = ["Josef", 1989, true];
let mixed = ["Josef", 1, false];
myTuple[1] = 198;
let myObj;
myObj = [];
myObj = guitars;
console.log(typeof myObj);
const exampleObj = {
    prop1: "Josef",
    prop2: true,
};
exampleObj.prop2 = false;
let evh = {
    name: "Eddie Van Halen",
    active: false,
    albums: [1984, 5150, "A Different Kind of Truth"],
    age: 65
};
let jp = {
    // name: "Jimmy",
    active: true,
    albums: ["I", "II", "IV"],
    age: 69
};
const greetGuitarist = (guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()}!`;
    }
    return "Hello!";
};
console.log(greetGuitarist(evh));
//Enums   
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
