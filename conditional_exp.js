let age =prompt("What is your age ?")
age = Number.parseInt(age)

if(age<0){
    console.log("Invalid age")
}
else if(age>0 && age<18){
    console.log("You cannot drive")
}
else{
    console.log("You can drive")
}