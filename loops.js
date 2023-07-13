const todos = [
    {
    id : 1,
    text : 'Take out trash',
    isComplete : true
},
{
    id : 2,
    text : 'Meeting the boss',
    isComplete : true
},
{
    id : 3,
    text : 'Dentist appt',
    isComplete : false
}
];

/*
for(let i =0 ; i< todos.length; i++){
    console.log(todos[i].text)
}
*/

/*
//forEach
todos.forEach(function(todo){
    console.log(todo.text);
});
*/

/*
// Map
const todoText = todos.map(function(todo){
    return todo.text;
});
console.log(todoText);
*/

/*
// Filter
const todoComplete = todos.filter(function(todo){
    return todo.isComplete === true;
});
console.log(todoComplete);
*/

// Filter and Map
const todoComplete = todos.filter(function(todo){
    return todo.isComplete === true;
}).map(function(todo){
    return todo.text;
})
console.log(todoComplete);