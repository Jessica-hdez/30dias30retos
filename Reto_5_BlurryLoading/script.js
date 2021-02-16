const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0

//Llama a una función cada ciertos intervalos específicos (en milisegundos).
//Continuará llamando a la función hasta que se llame a clearInterval ()
//o se cierre la ventana.
let int = setInterval(blurring, 30)

function blurring() {
  load = load + 1

  if(load > 99){
    //Detiene la ejecución cuando está al 100%.
    clearInterval(int);
  }

  //Renderiza el valor de load en .load-text.
  loadText.innerText = `${load}%`;
  /* console.log(load) */
  //Edita la opacidad del porcentaje para que cuando llegue a 100 su opacidad sea 0.
  loadText.style.opacity = map(load, 0, 100, 1, 0);
  //Edita el valor del filtro  de desenfoque.
  bg.style.filter = `blur(${map(load, 0, 100, 30, 0)}px)`;
} 

//Buscar "Mapear un rango de números a otro rango de números".
//Función anónima que se llama para la modificación de la opacidad del texto y el desenfoque de la img.
const map = (value, fromLow, fromHigh, toLow, toHigh) => {
  return ((value - fromLow) * (toHigh - toLow)) / (fromHigh - fromLow) + toLow
}