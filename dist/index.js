"use strict";
// Basic Types
let jesus = 5;
let compoany = 'haha';
let isPublished = true;
let x = 'Hello';
// Array
let ids = [1, 2, 3];
let arr = [1, true];
// Tuple
let person = [1, 'true', true];
// Tuple Array
let employee = [
    [2, 'd'],
    [3, 'e'],
];
// Union
let productId = 22;
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 5] = "Up";
    Direction1[Direction1["Down"] = 6] = "Down";
    Direction1[Direction1["Left"] = 7] = "Left";
    Direction1[Direction1["Right"] = 8] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Up); // gives 5
console.log(Direction1.Left); // prints 7
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Left"] = "L";
})(Direction2 || (Direction2 = {}));
// Objects
const user = {
    id: 3,
    name: 'd',
};
const userr = {
    id: 3,
    name: 'd',
};
