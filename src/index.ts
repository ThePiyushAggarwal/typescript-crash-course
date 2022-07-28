// Basic Types
let jesus: number = 5
let compoany: string = 'haha'
let isPublished: boolean = true
let x: any = 'Hello'

// Array
let ids: number[] = [1, 2, 3]
let arr: any[] = [1, true]

// Tuple
let person: [number, string, boolean] = [1, 'true', true]
// Tuple Array
let employee: [number, string][] = [
  [2, 'd'],
  [3, 'e'],
]

// Union
let productId: string | number = 22

// Enum
enum Direction1 {
  Up = 5,
  Down,
  Left,
  Right,
}

console.log(Direction1.Up) // gives 5
console.log(Direction1.Left) // prints 7

enum Direction2 {
  Up = 'Up',
  Left = 'L',
}

// Objects
const user: {
  id: number
  name: string
} = {
  id: 3,
  name: 'd',
}
// OR
type User = {
  id: number
  name: string
}
const userr: User = {
  id: 3,
  name: 'd',
}

// Type Assertion
// we want to treat an entity as a different type
let cid: any = 1
// let costumerId = <number>cid
let costumerId = cid as number

// Functions
function addNum(x: number, y: number): number {
  return x + y
}
console.log(addNum(1, 3))
// Void
function log(message: string | number): void {
  console.log(message)
}
log('Helio')

// Interfaces
interface UserInterface {
  readonly id: number
  name: string
  age?: number
}
const user1: UserInterface = {
  id: 1,
  name: 'John',
}
// Interfaces cannot create primitive types
type Point = number | string
const p1: Point = 1

interface MathFunc {
  (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + 1
const sub: MathFunc = (x: number, y: number): number => x - 1

// Interface for class down
// accessible as // class Person implements PersonInterface {
interface PersonInterface {
  id: number
  name: string
  register(): string
}

// Classes
class Person {
  id: number
  name: string

  constructor(id: number, name: string) {
    this.id = id
    this.name = name
  }

  // We can create any methods as well
  // accessble using e.g. brad.register()
  register() {
    return `${this.name} is now registered`
  }
}
// public, private, protected(getting access from extended class) keywords
// for class properties
const brad = new Person(1, 'fd')
const mike = new Person(2, 'fdass')

class Employee extends Person {
  position: string

  constructor(id: number, name: string, position: string) {
    super(id, name)
    this.position = position
  }
}

const emp = new Employee(3, 'Shawn', 'Developer')
// console.log(emp.register())

// Generics
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items)
}

let numArray = getArray<number>([1, 2, 3, 4])
let stringArray = getArray<string>(['brad', 'john', 'jill'])

numArray.push(2)
stringArray.push('2')
