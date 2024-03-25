"use strict";
//Invert to more or less specific
let a = 'hello';
let b = a; //less specific type
let c = a; //more specific type
let d = 'world';
let e = 'world';
const addOrConcat = (a, b, c) => {
    if (c === "add")
        return a + b;
    return "" + a + b;
};
let myVal = addOrConcat(2, 2, "concat");
// Be careful! Typescript sees no problem - but a string is returned
let nextVal = addOrConcat(2, 2, "concat");
// 10 as string
10;
// The DOM
const img = document.querySelector('img');
const myImg = document.getElementById('#img');
const nextImg = document.getElementById('#img');
img.src;
myImg.src;
