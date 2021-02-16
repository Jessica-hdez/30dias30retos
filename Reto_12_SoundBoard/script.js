const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sound

    btn.addEventListener('click', () => {
        //Detiene el sonido que está en proceso de reproducción.
        sounds.forEach(sound => {
            const beat = document.getElementById(sound)
    
            beat.pause()
            //Regresa el sonido al segundo 0.
            beat.currentTime = 0;
        })

        document.getElementById(sound).play()
    })

    document.getElementById('buttons').appendChild(btn)
})