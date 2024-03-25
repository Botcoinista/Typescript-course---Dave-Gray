"use strict";
function getFirstElement(array) {
    return array[0];
}
const numbers = [1, 2, 3];
const firstNumber = getFirstElement(numbers);
const strings = ['hello', 'world'];
const firstString = getFirstElement(strings);
console.log(firstNumber);
const input = document.querySelector("input");
input === null || input === void 0 ? void 0 : input.value;
const a = [1, 2, 3];
a.map(() => {
    return "Hej";
});
const map = new Map([["a", 1]]);
map.set("a", 1);
const response = {
    data: {
        status: 200,
    },
    isError: false
};
// const blogresponse: BlogResponse = {
//     data: {
//       title: "My first blog post"
//     },
//     isError: false
// }
// console.log(response.data.name, response.data.age)
// console.log(blogresponse.data.title)
