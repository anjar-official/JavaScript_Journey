// A variable is a container that stores a value.
//The value of a JS variable can be changed during the execution of the program.

var a = 7;  // Variable names cannot start with number.
console.log(a);

//Difference between var,let and const :-

//var is globally scoped while let and const are block scoped.
//var can be updated and re-declared 
//let can be updated but not re-declared
//const can neither be updated nor be re-declared

var b = "Hello";

{
    var b= "World";
    console.log(b);
}
console.log(b);

let c = 10;
{
    let c = 12;
    console.log(c);
}
console.log(c);

const rollno = 45;  //Must be initialized during declaration
rollno = "Not allowed"; // Throw an error because const cannot be changed