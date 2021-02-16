Instrucciones de Implementación

Bienvenidos al reto 10, para cumplirlo deberán seguir lo siguiente:

1. Ver el video de explicación de reto.

2. Tienen los siguientes recursos: HTML y parte del css y js*
   
   * Acá les damos una estructura y una guía de cómo deben hacerlo sientanse libres de
   cambiar el código en donde necesiten para llegar al resultado final.

3. Deberán completar el css y el js para que el reto funcione.

Resultado: El reto debe ser igual al que visualizan en el video.

¡HINTS!

CSS

- Empezar por dar el estilo adecuado a las clases vacías correspondientes a los campos del
formulario, tener en la clase padre del div form-control

  - La propiedad position es fundamental en este reto, revisar cual deberá ir como relative y
  absolute en input y label respectivamente.
  - Crear los estilos del input apoyandose de un background transparente, color de fuente
  blanca y una línea en la parte inferior del campo.


- Botón
   - dar una propiedad transform adecuada (según lo que se ve en el video) en la clase .btn:active
  
- 
JS

 - Validar paso a paso hacer uso de console.log() y la herramienta de desarrollador - 


Como solo tenemos un label para cada nombre de campo vamos a convertir 

         <!-- <label>
            <span style="transition-delay: 0ms">E</span>
              <span style="transition-delay: 50ms">m</span>
              <span style="transition-delay: 100ms">a</span>
              <span style="transition-delay: 150ms">i</span>
              <span style="transition-delay: 200ms">l</span>
        </label> -->

        en uno solo con javascript


- seleccionar a través de un querySelectorAll todos los labels correspondientes al formulario.

- luego haremos un ciclo de esas etiquetas:
   
   siguiendo el código dado:

   tenemos el inner text, por lo que estamos recorriendo la etiqueta, 
   luego tenemos un split de ese label que pondrá cada letra en su propio elemento 
   luego lo mapeamos para crear un array de la letra con un span alrededor, 
   y por último la volvemos a convertir en una cadena.
   revisar en la imagen adjunta como se ve el proceso inspeccionando.

   una vez tengamos ese proceso podremos devolvernos al css y colocar las transiciones
   correspondientes, debemos hacerlo para focus y para valid
   (usaremos tanslateY porque nos moveremos en el eje Y y de manera negativa esto creará
   el efecto hacia arriba)

   una vez tengamos el efecto podremos modificar el js con un style="transition-delay:"
   dado en ms, probar diferentes valores hasta encontrar el tiempo adecuado como se ve en el video
   
   0ms
   50ms
   100ms
   150ms
   200ms