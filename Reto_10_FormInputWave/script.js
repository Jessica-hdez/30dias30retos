const labels = document.querySelectorAll('.form-control label');

//Recorrido de la etiqueta
labels.forEach(label => {
    
    label.innerHTML = label.innerText
        //Pondrá cada letra en su propio elemento.
        .split('')
        //Creará un array de la letra con un span alrededor.
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
        //Convertirá la cadena en string.
        .join('')
});