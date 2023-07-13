// primitive and non-primitive data types
//Primitive datatypes are a set of base data types in js
//There are 7 primitive data types:-
// nn bb ss u  :: null, number, symbol, string, boolean, bigint, undefined.

let a = null
let b = 123;
let c = Symbol("I am a symbol");
let d = "It is a string";
let e = true;
let f = BigInt("2345");
let g = undefined;
console.log(a, b, c, d, e, f, g);
console.log(typeof f);

// Object in JS (Non-primitive data type)

const capitals = {
    Assam : "Dispur",
    Karnataka : "Bangalore",
    Rajasthan : "Jaipur",
}
console.log(capitals["Assam"]);