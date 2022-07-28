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
// Type Assertion
// we want to treat an entity as a different type
let cid = 1;
// let costumerId = <number>cid
let costumerId = cid;
// Functions
function addNum(x, y) {
    return x + y;
}
console.log(addNum(1, 3));
// Void
function log(message) {
    console.log(message);
}
log('Helio');
const user1 = {
    id: 1,
    name: 'John',
};
const p1 = 1;
const add = (x, y) => x + 1;
const sub = (x, y) => x - 1;
// Classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    // We can create any methods as well
    // accessble using e.g. brad.register()
    register() {
        return `${this.name} is now registered`;
    }
}
// public, private, protected(getting access from extended class) keywords
// for class properties
const brad = new Person(1, 'fd');
const mike = new Person(2, 'fdass');
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, 'Shawn', 'Developer');
// console.log(emp.register())
// Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let stringArray = getArray(['brad', 'john', 'jill']);
numArray.push(2);
stringArray.push('2');
