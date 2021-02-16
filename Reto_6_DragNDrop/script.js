const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

//El evento se activa cuando el usuario comienza a arrastrar un elemento.
fill.addEventListener('dragstart', dragStart)
//El evento se activa cuando se finaliza la operación de arrastre
//(soltando un botón del mouse).
fill.addEventListener('dragend', dragEnd)

//Recorre los empties
for(const empty of empties) {
    //El evento se activa cuando la selección se arrastra sobre un destino de
    //colocación válido. El evento se dispara en los destinos de caída.
    empty.addEventListener('dragover', dragOver)
    //El evento se activa cuando un elemento arrastrado ingresa a un destino de colocación válido.
    empty.addEventListener('dragenter', dragEnter)
    //El evento se activa cuando un elemento arrastrado deja un destino de colocación válido
    empty.addEventListener('dragleave', dragLeave)
    //El evento se activa cuando un elemento se coloca en un destino de colocación válido
    empty.addEventListener('drop', dragDrop)
}

//Al comenzar a arrastrar la img(fill), le agrega la clase
//hold (borde de la imagen al estar seleccionada).
//Luego de 0 mlsgs agrega a this empty la clase delete (opacidad en 0).
function dragStart() {
    this.className += ' hold' 
    setTimeout(() => this.className = 'delete', 0)
}
//Función que al soltar el cursor agrega la clase fill a this empty.
function dragEnd() {
    this.className = 'fill'
}

function dragOver(e) {
    e.preventDefault()
}

function dragEnter(e) {
    e.preventDefault()
    //El elemento ahora se verá azul con línea punteada.
    this.classList.add('hovered')
}

function dragLeave() {
    //El elemento deja de verse azul con línea punteada.
    this.classList.remove('hovered')
}

function dragDrop() {
    //El elemento deja de verse azul con línea punteada.
    this.classList.remove('hovered')
    //Append inserta a fill después del elemento this-empty.
    this.append(fill)
}