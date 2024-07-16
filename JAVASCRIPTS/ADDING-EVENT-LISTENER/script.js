// const h1 = document.querySelector('h1')

// function sayHi() {
//     console.log('Hiiii');
// }

// h1.addEventListener('click', sayHi)

let count = 1

const card = document.querySelector('.card')
const container = document.querySelector('.container')

card.addEventListener('click',() => {
   const newCard = document.createElement('div')
   newCard.classList.add('card') //class add
   newCard.innerText = count
   count++
   container.append(newCard)
    //console.log(newCard);
})