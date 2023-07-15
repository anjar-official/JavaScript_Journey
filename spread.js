//Array
let pets= ["cat", "dog" , "rabbits"];
let carnivorous = ["lion", "wolf", "leopard", "tiger"];

let animals = [...pets, ...carnivorous]
console.log(animals)


//Object
let name = {firstName:"John", lastName:"Doe"};
let hobbies = { hobby1: "singing", hobby2: "dancing" }

let info= {...name, ...hobbies}
console.log(info)