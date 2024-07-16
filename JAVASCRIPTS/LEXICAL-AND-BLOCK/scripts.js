const username = 'Anurag'
let userAge = 25
var a = 50

// function add() {
//   debugger
//   const username = 'Akash'
//   const x = 5
//   const y = 8
//   console.log(x + y)
//   console.log(username)
// }

function subtract() {
  const x = 15
  const y = 18
  const z = 28
  console.log(x - y)
  console.log(username);

  function child() {
    const childName = 'Golu'
    console.log(childName);
    console.log(z);

    function grandChild(){
       const grandChild = 'Sunny'
       console.log(grandChild) ;
    }
       grandChild();
  }

  child()

}

//add()
subtract()

console.log('Program Ended');