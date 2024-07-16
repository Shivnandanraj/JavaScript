const container = document.querySelector('.container')


// const imgContainer = document.createElement('div')
// imgContainer.classList.add('img-container')

// const newImage = document.createElement('img')
// newImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`  

// const paragraph = document.createElement('p')
// paragraph.innerText = 10

// imgContainer.append(newImage, paragraph)
// container.append(imgContainer)


//OR SAME WAY IN FOR LOOP

for(let i = 1; i < 10; i++ ) {
    
const imgContainer = document.createElement('div')
imgContainer.classList.add('img-container')

const newImage = document.createElement('img')
newImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`  

const paragraph = document.createElement('p')
paragraph.innerText = i

imgContainer.append(newImage, paragraph)
container.append(imgContainer)


} 