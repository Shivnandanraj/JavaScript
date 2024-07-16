const green = document.querySelector('.green')
const pink = document.querySelector('.pink')
const blue = document.querySelector('.blue')

// green.addEventListener('click',(e) =>
// {
//     console.log('Green Event Listener');
// })

// pink.addEventListener('click',(e) =>
//     {
//         console.log('pink Event Listener');
//     })

// blue.addEventListener('click',(e) =>
//      {
//          console.log('blue Event Listener');
//      })    

//EVENT CAPTURING:
blue.addEventListener('click', (e) => {
    console.log('Blue Event Listener');
}, {capture: true})