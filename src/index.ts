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
