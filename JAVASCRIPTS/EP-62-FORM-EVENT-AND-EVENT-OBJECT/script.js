const usernameinput = document.querySelector('#username')
const paragraph = document.querySelector('p')
const form = document.querySelector('form')

// usernameinput.addEventListener('click',() => 
// {
//     console.log('input clicked');
// })


// usernameinput.addEventListener('dbclick',() => 
//     {
//         console.log('input double clicked');
//     })

let inputValue

//=> This is the Input Event

// usernameinput.addEventListener('input', (e) => 
//     {
//         console.log(e.target.value); 
//         inputValue = e.target.value  
//         paragraph.innerText = e.target.value;
//         //console.log('input event fired');
//     })
        
        
    //=> This is the change Event
// usernameinput.addEventListener('change', (e) => 
//         {
//             console.log(e.target.value); 
//             inputValue = e.target.value  //input Event
//             paragraph.innerText = e.target.value;
//             //console.log('input event fired');
//         })

//=> focus event
// usernameinput.addEventListener('focus', (e) =>{ 
 
// console.log(e.type); 
//  inputValue = e.target.value  
// paragraph.innerText = e.target.value;
//  })
                        
// //=> blur event
//  usernameinput.addEventListener('blur', (e) =>{ 
 
//     console.log(e.type); 
//      inputValue = e.target.value  
//     paragraph.innerText = e.target.value;
//      })

form.addEventListener('submit',(e) => {
    console.log(e);

})
        