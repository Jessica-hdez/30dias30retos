const textEl = document.getElementById('text');
const speedEl = document.getElementById('speed');

const text = 'We Love Programming!';
let idx = 1;
let speed = 300 / speedEl.value;

writeText();

function writeText() {
    //Nueva cadena desde el indice 0  hasta el idx.
    textEl.innerText = text.slice(0, idx);
    idx = idx + 1;

    //Si el indice es mayor a la longitud del texto, se reinicia el efecto.
    if(idx > text.length) {
        idx = 1;
    }

    //SetTimeOut recibe la función a ejecutar y el intervalo de tiempo.
    setTimeout(writeText, speed)
}

//Modificación de la velocidad según el valor en elemento speed.
speedEl.addEventListener('input', (e) => speed =  300 / e.target.value)