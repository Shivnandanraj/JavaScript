// console.log('chaliye shur karate hai')

// //object create

// let rectangle = {
//     length: 1,
//     breadth:2,

//     draw: function() {
//         console.log('draw');
//     } 

// };

// //=> factory function

// function createRectangle(len, bre) {

//     return rectangle = {
//         length:len,
//         breadth:bre,

//         draw() {
//             console.log('drawing rectangle');
//         }
//     };
// }

// let rectangleobj1 = createRectangle(5, 4);


//rectangle.length;  //acceass
//rectangle.breadth; //access

//rectange.draw(); //function call


//Camelcase => numberofStudents
//constructor functon => Pascal Notation =>
// fist lettet of every word is Capital =>NumberofStudent 
//constructor function => prop/methods -> intialise/define
function Rectangle() {
    this.length = 1;
    this.breadth = 2;
    this.draw= function(){
        console.log('drawing');
    }
} 

//object creation using constructor function

let rectangleObject = new Rectangle();
