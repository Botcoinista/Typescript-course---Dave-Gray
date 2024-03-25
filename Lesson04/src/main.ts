// Type Aliases
type stringOrNumber = string | number;

type stringOrNumberArray = (string | number)[];

type Guitarist = {
    name?: string,
    active: boolean,
    albums: (string | number )[]
}

type UserId = stringOrNumber

//Literal Types
let myName: "Josef" 

let userName: "Josef" | "Jose" | "Amy"
userName = "Amy"

//functions
const add = (a: number, b: number): number => {
    return a + b
}

const logMsg = (message: any): void => {
    console.log(message)
}

logMsg("Hello!")
logMsg(add(2,3))

let subtract = function (c: number, d: number): number {
    return c - d
} 

type mathFunction = (a: number, b: number) => number 
// interface mathFunction {
//     (a: number, b: number): number 
// } 



let multiply: mathFunction = (c, d) => {
    return c * d
}

logMsg(multiply(2,2))

//Optional Parameters
//Optional parameters must be at the end of the parameter list
const addAll = (a: number, b: number, c?: number): 
number => {
    if (typeof c !== "undefined") {
    return a + b + c
    }
    return a + b
}

//Default Param value
const sumAll = (a: number = 10, b: number, c: number = 2): 
number => {
    return a + b + c
}

// logMsg(addAll(2,3,2))
// logMsg(addAll(2,3))
logMsg(sumAll(undefined, 3))

//Rest Parameters
const total = (a: number, ...nums: number[]): number => {
    return a + nums.reduce((prev, curr) => prev + curr)
}

logMsg(total(10, 2, 3))


//Never Type
const createError = (errMsg: string): never => {
    throw new Error(errMsg)
}

//Never type if you dont have an if statement
const infinite = () => {
    let i: number = 1;
    while (true) {  // This loop runs indefinitely
        i++;  // Increment i
        logMsg(i)  // Optional: Print the current value of i
        if (i > 100) break;  // If i exceeds 100, exit the loop
    }
}

infinite()


//Custom Type Guard
const isNumber = (value: any): boolean => {
    return typeof value === "number"
    ? true : false
}

//Use of the never type
const numberOrString = (value: number | string): 
string => {
    if (typeof value === "string") return "string"
    if (isNumber(value)) return "number"
    return createError("This should never happen!")
}

