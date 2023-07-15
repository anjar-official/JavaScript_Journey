//Arrray
let fruits= ["Mango", "Pineapple" , "Orange", "Lemon", "Apple"];
const [fruit1,fruit2, ...rest] = fruits
console.log(fruit1,fruit2,rest)

//Object
const Susan = {
    firstName: "Susani",
    lastName: "Steward",
    age: 14,
    hobbies: {
      hobby1: "singing",
      hobby2: "dancing"
    }
  };

  const {firstName, ...rest1} = Susan
  console.log(firstName,rest1)