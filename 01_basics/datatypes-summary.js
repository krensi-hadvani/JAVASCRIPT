// primitive

// 7 types : String, Nunber Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

//const bigNumber = 44653254351218453546521n



//Reference (Non Primitive)

//Array, Object, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj ={
    name : "krensi",
    age : 22,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof myFunction);

//https://262.ecma-international.org/5.1/#sec-11.4.3