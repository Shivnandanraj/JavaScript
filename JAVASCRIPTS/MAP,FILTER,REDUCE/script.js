const months =['january','February','March','April','May','December']

//  months.map((month , index) => {
//     console.log(index, month);
//     return month.toUpperCase()
// }) 



// const capitalMonths = months.forEach((month , index) => {
//     console.log(index + 1, month);
//     return month.toUpperCase()
// }) 


// const capitalMonths = months.map((month , index, array) => {
//     console.log(index + 1, month);
//     console.log(array);
//     return month.toUpperCase()
// }) 

//FILTER METHOD

// const filteredMonths = months.filter((month, index, array) => {
//    // console.log(month.length <= 5);
//     //console.log(array);
//     //return month.length <= 5
//     return month.toLocaleLowerCase().includes('m')
// }) 


const filteredMonths = months.filter((month, index, array) => {
   // console.log(month.toLocaleLowerCase().includes('m'))
   //console.log(array);  
    return index >= 3
})

const students = [
    {
        name:'Shivnandan',
        age: 21,
    },
    {
        name:'Shiv',
        age: 17,
    },
    {
        name:'Shivkumar',
        age: 18,
    },
    {
        name:'Raman',
        age: 23,
    },
    {
        name:'Nidhi',
        age: 16,
    },
]

// const adultstudent = students.filter((student) => {
//     //console.log(student.age >= 18);
//     return student.age >= 18
// })

// const adultStudents = students.filter((student) => {
//     return student.age >= 18
// })

// const adultStudentsName = adultStudents.map((student) => {
//       return student.name
// })

const adultStudents = students.filter((student) => {
    return student.age >= 18
}).map((student) => {
    return student.name
})

