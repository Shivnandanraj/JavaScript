//EXAMPLE:1
// function main() {
//     const name = "Shivnandan Kumar"; //variable declare hua hai

//     function sayMyName() {
//         console.log(name);
//     }

//     sayMyName();
// }

// main();

//EXAMPLE:2
// function main(name) {
//     function sayMyName() {
//         console.log(name);
//     }

//      return sayMyName;
// }

// let consoleShiv = main("Shivnandan");

// console.log(consoleShiv);


//EXAMPLE:3
// function adder(num) {


//     function add(b) {
//         console.log(num + b);
//     }



//     return add;
// }

// const addTo5 = adder(5);

// addTo5(2);
// addTo5(7);

//EXAMPLE:4
// const myName = document.getElementById("my-name") 
// const btn = document.getElementById('my-btn');
//     function makeTextSizer(size) { //ake function banya hai  maketextsizer


//         function changeSize() { 
//             myName.style.fontSize = `${size}px`; 
//         }
//         return changeSize;
    
// }

// const size12 = makeTextSizer(12);
// const size20 = makeTextSizer(20);
// const size52 = makeTextSizer(52);
// const size5 = makeTextSizer(5);

// btn.addEventListener("click",size12);

//EXAMPLE:5
//const myName = document.getElementById("my-name") 
//fconst btn = document.getElementById('my-btn');

function makeCounter() {
    let count = 1;

    function increment() {
        console.log(count++);
    }

    return increment;
}

const counter1 = makeCounter();

counter1();
counter1();
counter1();
counter1();