const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

//Se ejecuta para visualizar las primeras boxes.
checkBoxes()

function checkBoxes() {
     
    //La propiedad innerHeight del objeto window retorna la altura en pixeles del viewport.
    const triggerBottom = window.innerHeight / 5 * 4

    boxes.forEach(box => {
        
        //getBoundingClientReact devuelve la posición relativa de un elemento respecto al viewport.
        //Es un objeto con ocho propiedades: left, top, right, bottom, 'x, y, width, height'.
        const boxTop = box.getBoundingClientRect().top
        
        //Si la posición relativa de la caja es menor que la altura del viewport significa que ya
        //debe visualizarse, por lo que se le agrega la clase show (traslada la caja en el eje X).
        if(boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            //Si la posición relativa de la caja es mayor que la altura del viewport es porque se
            //subió en la ventana y se debe trasladar la caja a su posición inicial.
            box.classList.remove('show')
        }        
    })   
}