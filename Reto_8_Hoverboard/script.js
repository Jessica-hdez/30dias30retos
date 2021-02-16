const container = document.getElementById('container')
const colors = ['#96E5E2', '#00C6C7', '#00ACA5', '#006F60', '#005245']
const SQUARES = 500

for(let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    //Cada vez que el puntero entra al elemento square se ejecuta la función.
    square.addEventListener('mouseover', () => setColor(square))

    //Cada vez que el puntero sale del elemento square se ejecuta la función.
    square.addEventListener('mouseout', () => removeColor(square))

    container.appendChild(square)
}

//Cambia el color del background y shadow.
function setColor(element) {
   const color = getRandomColor()
   element.style.background = color
   element.style.boxShadow = `0 0 2px ${color}`
}

//Reinicia los valores del background y shadow.
function removeColor(element) {
   element.style.background = '#1d1d1d'
   element.style.boxShadow = '0 0 2px #000'
}

//Asigna el color de manera random dentro de las posibilidades de la lista.
function getRandomColor() {
    //Escoge una posición aleatoria del array colors.
    return colors[Math.floor(Math.random() * colors.length)] 
}