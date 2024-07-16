//Arrow functions

//1. syntax

//This is the simple function
// function sayHello() {
//     console.log("Hello");
// }

// sayHello();

//Using arrow Functions

// const sayHello = () => { // Arrow Functions
//     console.log("Hryy");
// };

// sayHello();

// const add = (a, b) => {
//     return a + b;
// };

// const addv2 =(a, b) => a + b //one liner Arrow functions

// console.log(addv2(2,3));

// //2. 'Agruments' Keyword

// const addNumbers =(...nums) => { //(...(dot dot dot is spread operator))
//     console.log(nums);
// };

// addNumbers (10,22,33,44,2);

//3.Hoisting
// sayHey();

// function sayHey () {
//     console.log("Hey there");
// }


//Using arrow function in hoisting
const sayHey = () => {
    console.log("Heyy there");
}

sayHey();

4. //This keyword
const obj ={
    value:20,
    myFunction: function () {
        console.log("Value is" + this.value);
    },
};

obj.myFunction();