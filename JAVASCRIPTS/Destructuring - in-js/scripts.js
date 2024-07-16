//Destructuring in js with array(arry ka sath concept)

const colors = ['red','green','yellow','pink','black']


// const color1 = colors[0]
// const color2 = colors[1]
// const color3 = colors[2]

//Using Destructuring in With Array

const [color1, color2, color3] = colors


//object 

const user = {
    name:'Shiv Nandan',
    age:25,
    address: {
        city: 'Bangalore',
        state: 'Karnataka'
    },
}

//const name = user.name
//const age = user.age

//object ka sath destructuring

//const {name, age} = user

// Another way destructuring in object

const {name, age } = user
 
//const { name: username, age: userage} = user

//const {address: {city} } = user

//functon creation

function intro({age, name}) {
    console.log(age, name);
}


intro(user)