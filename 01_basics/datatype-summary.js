/*
datatypes are of two types:-
--> Primitve and Non-Primitive
difference between them is based upon call by value and call by reference.
*/

// Primitive datatypes:  (7 Types)

// String - string
// Number - number
// Boolean - Boolean
// Null - object(****)
// Undefined - undefined
// BigInt - bigint
// Symbol - Symbol

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null     // datatype = object
let userEmail;               // datatype = undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id);    // Symbol(123)
console.log(id === anotherId);    // false

// const bigNumber = 3456543576654356754n


// Non-primitive datatypes(Reference) | (3 Types)

// Array - object
// Function - function(object)
// Object - object

const heros = ["shaktiman", "naagraj", "doga"];   // Array

// Object
let myObj = {
    name: "hitesh",
    age: 22,
}

// Function
const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3   // for datatypes 
