
// const fruits = ['banana', 'apple', 'peach', 'mango', 'grapes']

// for(const fruit of fruits) {
//     console.log(fruit);
// } 

// //Using String in for of loop

// const user = 'Shivnandan Kumar'

// for(const letter of user) {
//     console.log(letter);
// }

const person = {
    firstName:'john',
    lastName:'Doe',
    age:50,
    eyeColor:'blue',
    city:'Banglore',

}

const personKeys = Object.keys(person)
for(const key of personKeys) {
    console.log(person[key]);
}