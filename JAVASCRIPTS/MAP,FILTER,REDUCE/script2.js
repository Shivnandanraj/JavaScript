// const nums = [1, 2, 3]

// nums.reduce((accumulator, current, i) => {
//    // console.log(i, current);
//    console.log(accumulator, current);
//    return accumulator + current
// }, 0)

const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function(acc, currval){
//    console.log(acc, currval)
//    return acc + currval
// }, 0)

// console.log(myTotal);

//USING ARROW FUNCTION

//const myTotal = myNums.reduce((acc, curr) => acc+curr, 0)
//console.log(myTotal);

//Example: 2

const shoppingcart = [
   {
      itemName:"js course",
      price:2999
   },
   {
      itemName:"py course",
      price:999
   },
   {
      itemName:"mobile dev course",
      price:5999
   },
   {
      itemName:"data sceiene course",
      price:12999
   },
]

const priceToPay = shoppingcart.reduce((acc,item) => acc + item.price, 0)

 console.log(priceToPay);

