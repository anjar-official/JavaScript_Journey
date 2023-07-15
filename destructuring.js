//Array Destructuring
let fruits= ["Mango", "Pineapple" , "Orange", "Lemon", "Apple"];
let[fruit1,fruit2,fruit3] = fruits
console.log(fruit1,fruit2,fruit3)

//Object Destructuring
const Susan = {
    firstName: "Susan",
    lastName: "Steward",
    age: 14,
    hobbies: {
      hobby1: "singing",
      hobby2: "dancing"
    }
  };

  const {firstName,age,hobbies:{hobby1}}= Susan
  console.log(firstName,age,hobby1)