//SPREAD OPERATOR KA USE ARRRAY SATH BHE HOTA HAI

 const nums1 = [1, 2, 3, 4]
 const nums2 = [5,6,7, 8, 9]

// //OR STRING KE SATH BHE HOTA HAI
// const myName = 'ShiV Nandan'

 const joinedArray = [...nums1, ...nums2]

//# OR SPREAD OPERATOR KA USE OBJECT KE 
//SATH  BHE HOTA HAI

// const user = {
//     name: 'Shivnandan',
//     age: 23,
// }

// const updatedUser = {...user, city: 'Bangalore'}

//FUNCTION CALL KARATE SAMEYA BHE SPREAD OPERATOR 
//KA USE KARATE HAI

function add() {
    let sum = 0

    for(i = 0; i < arguments.length; i++) {
        sum = sum + arguments[i];
    }
    return sum
}
