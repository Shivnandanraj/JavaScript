//console.log('shivnandan');

// let numbers = [1,4,5,7];

// console.log(numbers); 

// //end => push
// //beginning => unshift

// //middle => splice

// //searching
// console.log(numbers); 

// console.log(numbers.indexOf(9));

// // we want ot check if a number exists in an array

// console.log(numbers.includes(7));

// console.log(numbers.indexOf(4,2));


// let courses = [
//     {no:1, naam:'Shiv'},
//     {no:2, naam:'Kumar'}
// ];
// console.log(courses);


// let course = courses.find(function(course) {
//     return course.naam =='Shiv';
// });

//console.log(course);

//USING ARROW FUNCTIONS

// let course = courses.find(course => 
//      course.naam =='Shiv');

//      console.log(course); 
  

//Removing Element

// let numbers =[1,2,3,4,5,6,7];

// //end
// numbers.pop();
// //beginning
// numbers.shift();
// //middle
// numbers.splice(2,1);

// console.log(numbers);  
 
//=>Emptying methods 

// let numbers =[1,2,3,4,5];
// let numbers2 = numbers;

// //numbers =[];
// numbers.length = 0;

// console.log(numbers);
// console.log(numbers2);

//=>Combining & Slicing Arrays

// let first = [1,2,3];
// let second= [4,5,6];

//  let combined = first.concat(second);

//  console.log(combined);


//  let sliced = combined.slice(2,3);
//  console.log(sliced);

//=> Iterating an array

// let arr = [10,20,30,40,50];

// for (let  value of arr){
//     console.log(value);
// }

// arr.forEach(function(number){ //For each loop
//     console.log(number);
// });  


//=> Joining Array

// let numbers = [10,20,30,40,50];

// const joined = numbers.join( ' , ');

// console.log(joined);
 


//=> Sorting Arrays

// let numbers = [40,30,10,20,50];

// numbers.sort(); 

// console.log(numbers);
 
// numbers.reverse()

// console.log(numbers); 

//=> Filtering Arrays

// let numbers = [1,2,-1,4];

// let filtered = numbers.filter(function(value) {
//     return value >=0;
// });

// console.log(filtered);

//=> Mapping Arrays

let numbers = [7,8,9,10];

let items = numbers.map(function(value) {
    return 'student_no' + value;
})

console.log(items);