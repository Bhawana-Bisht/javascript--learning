// datatypes:

// 1- Primitive => 7 types
// string, number, boolean, null, undefined, symbol, bigint

// 2- Non-primitive (Reference datatypes)

// Array
const heros = ["superman", "shaktiman"];

// Object
let myObj = {
    name: "bhawana",
    age: 13,
};

// Function
const myFunction = function () {
    console.log("hello world");
};

// Stack (Primitive) , Heap (Non-Primitive)

// Stack => copy of original value
// Heap => reference of object

let name = "bhawana";
let othername = name;

console.log(name);
console.log(othername);

let userone = {
    email: "user@google.com",
    upi: "user@ybl"
};

let userTwo = userone;

userTwo.email = "bhawna@google.com";

console.log(userone.email);
console.log(userTwo.email);