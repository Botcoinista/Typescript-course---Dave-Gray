"use strict";
//Literal Types
let myName;
let userName;
userName = "Amy";
//functions
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg("Hello!");
logMsg(add(2, 3));
let subtract = function (c, d) {
    return c - d;
};
// interface mathFunction {
//     (a: number, b: number): number 
// } 
let multiply = (c, d) => {
    return c * d;
};
logMsg(multiply(2, 2));
//Optional Parameters
//Optional parameters must be at the end of the parameter list
const addAll = (a, b, c) => {
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    return a + b;
};
//Default Param value
const sumAll = (a = 10, b, c = 2) => {
    return a + b + c;
};
// logMsg(addAll(2,3,2))
// logMsg(addAll(2,3))
logMsg(sumAll(undefined, 3));
//Rest Parameters
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(10, 2, 3));
//Never Type
const createError = (errMsg) => {
    throw new Error(errMsg);
};
//Never type if you dont have an if statement
const infinite = () => {
    let i = 1;
    while (true) { // This loop runs indefinitely
        i++; // Increment i
        logMsg(i); // Optional: Print the current value of i
        if (i > 100)
            break; // If i exceeds 100, exit the loop
    }
};
infinite();
//Custom Type Guard
const isNumber = (value) => {
    return typeof value === "number"
        ? true : false;
};
//Use of the never type
const numberOrString = (value) => {
    if (typeof value === "string")
        return "string";
    if (isNumber(value))
        return "number";
    return createError("This should never happen!");
};
