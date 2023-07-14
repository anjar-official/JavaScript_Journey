/*      ES5
//Constructor function
function Person(firstName,lastName,dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    this.fullName = function(){
        return `${this.firstName} ${this.lastName}`;
    }
}

//Instantiate Object
const person1 = new Person('Anjar','Hussain','02-16-2002');
const person2 = new Person('Mary','Quirre','10-07-2002');

console.log(person1);
console.log(person2.firstName);
console.log(person2.dob);
console.log(person1.fullName());
*/

//Constructor function
function Person(firstName,lastName,dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
}
Person.prototype.fullName = function(){
    return `${this.firstName} ${this.lastName}`;
}

//Instantiate Object
const person1 = new Person('Anjar','Hussain','02-16-2002');
const person2 = new Person('Mary','Quirre','10-07-2002');

console.log(person1);
console.log(person2.firstName);
console.log(person2.dob);
console.log(person1.fullName());