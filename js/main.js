/* MANEJO DE LA CUENTA REGRESIVA */

//Seteo la fecha del evento con el formato MMDDAAAA HH:MM:SS
let fecha_evento = new Date("11/02/2024 20:10:00");
let msFecha = fecha_evento.getTime();

//obtengo los elementos del DOM que contiene los 
//valores de la regrisiva.
let v_dia = document.querySelector("#dias");
let v_hora = document.querySelector("#horas");
let v_minuto = document.querySelector("#minutos");
let v_segundo = document.querySelector("#segundos");
let v_completado = document.querySelector("#completado");

//Creo la funcion que realizara la cuenta regresiva

let intervalo = setInterval(() => {
    let hoy = new Date().getTime();
    let distancia = msFecha - hoy;

    let msPorDias = 1000 * 60 * 60 * 24;
    let msPorHoras = 1000 * 60 * 60;
    let msPorMinutos = 1000 * 60;
    let msPorSegundos = 1000;

    //calculando tiempo
    let dias = Math.floor(distancia / msPorDias);
    let horas = Math.floor((distancia % msPorDias) / msPorHoras);
    let minutos = Math.floor((distancia % msPorHoras) / msPorMinutos);
    let segundos = Math.floor((distancia % msPorMinutos) / msPorSegundos);

    //asigno para mostrar
    v_dia.innerHTML = dias < 10 ? "0" + dias: dias;
    v_hora.innerHTML = horas < 10 ? "0" + horas: horas;
    v_minuto.innerHTML = minutos < 10 ? "0" + minutos: minutos;
    v_segundo.innerHTML = segundos < 10 ? "0" + segundos: segundos;

    if (distancia < 0){
        clearInterval(intervalo);
        v_dia.innerHTML = '00';
        v_hora.innerHTML = '00';
        v_minuto.innerHTML = '00';
        v_segundo.innerHTML = '00';
        v_completado.innerHTML = '<p>¡La espera termino!</p>'
    }

},1000);

/* MANOJO DEL COPIADO DE LOS DATOS EN LOS ICONOS BANCO */

function copyToClipboard(text) {
    // Intenta usar la API del portapapeles
    navigator.clipboard.writeText(text).then(() => {
        // Mostrar el tooltip de éxito
        const tooltip = document.getElementById('tooltip');
        tooltip.classList.add('show');
        setTimeout(() => {
            tooltip.classList.remove('show');
        }, 2000); // El tooltip se oculta después de 2 segundos
    }).catch(err => {
        console.error('Error al copiar al portapapeles: ', err);
        // Mostrar un mensaje de error
        alert('No se pudo copiar al portapapeles. Intenta nuevamente.');
    });
}

function setupCopyListener(iconId, textId) {
    const icon = document.getElementById(iconId);
    if (icon) {
        icon.addEventListener('click', function() {
            const text = document.getElementById(textId).innerText;
            copyToClipboard(text);
        });

        // Añadir soporte para eventos táctiles
        icon.addEventListener('touchend', function() {
            const text = document.getElementById(textId).innerText;
            copyToClipboard(trim(text));            
        });
    }
}

// Configura los listeners para los iconos de copiar
setupCopyListener('pela-cbu', 'pela-cbu-text');
setupCopyListener('pela-alias', 'pela-alias-text');
setupCopyListener('emi-cbu', 'emi-cbu-text');
setupCopyListener('emi-alias', 'emi-alias-text');


/* MANEJO DE LA GALERIA DE IMAGENES */

document.querySelectorAll('.image-container img').forEach(image =>{
    image.onclick = () => {
        document.querySelector('.popup-image').style.display = 'block';        
        document.querySelector('.popup-image img').src = image.getAttribute('src');
        var imgNombre = image.getAttribute('src').slice(16,-4);
        const popup = document.getElementById('popup-image');
        
        popup.classList.remove('image-redim');
        popup.classList.remove('image-redim2');
        popup.classList.remove('image-redim3');

        if (imgNombre === '02') {            
            popup.classList.add('image-redim');
        }
        else if (imgNombre === '10'){
            popup.classList.add('image-redim2');
        }
        else if (imgNombre === '13' || imgNombre === '15' || imgNombre === '16'){
            popup.classList.add('image-redim3');
        }
    }
});

document.querySelector('.popup-image').onclick = () =>{
    document.querySelector('.popup-image').style.display = 'none';
};


/* MANEJO DE LAS ESTRELLAS */

const starsContainer = document.getElementById('stars-container');
const starsCount = 100; // Número de estrellas

for (let i = 0; i < starsCount; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    
    // Posición inicial aleatoria
    star.style.top = `${Math.random() * 100}vh`;
    star.style.left = `${Math.random() * 100}vw`;
    
    // Tamaño y velocidad de parpadeo aleatorios
    const size = Math.random() * 2 + 8;  // Tamaño entre 1px y 3px
    const blinkDuration = Math.random() * 3 + 1;  // Duración entre 2s y 4s
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.animationDuration = `${blinkDuration}s`;
    
    // Añadir estrella al contenedor
    starsContainer.appendChild(star);
}

/* MANEJO DEL AUDIO */

var audio = document.getElementById('audio');
var pause = document.getElementById('pause');
var playPauseText = document.getElementById('play-pause-text');
var ico_play = "/imagenes/play-circle.svg";
var ico_pause = "/imagenes/pause-circle.svg";

pause.addEventListener("click", function() {

    if (audio.paused) {
    audio.play();
    document.querySelector('#pause').src = ico_pause
    playPauseText.textContent = "Pausa";
} else {
    audio.pause();
    document.querySelector('#pause').src = ico_play
    playPauseText.textContent = "Play";
}
});

/* MANEJO DEL EFECTO MAQUINA DE ESCRIBIR */

const typed = new Typed('.typed', {
    // strings: ['Nos casamos...!!!'],
    
    stringsElement: '#texto-presentacion',
    typeSpeed: 75,
    startDelay: 300,
    backSpeed: 75,
    smartBackspace: true,
    shuffle: false,
    backDelay: 1500,
    loop: true,
    loopCount: false,
    showCursor: true,
    cursorChar: '|',
    contentType: 'html',
});

const nombres = new Typed('.typed-nosotros', {
    // strings: ['Nos casamos...!!!'],
    
    stringsElement: '#nombre-nosotros',
    typeSpeed: 75,
    startDelay: 300,
    backSpeed: 75,
    smartBackspace: true,
    shuffle: false,
    backDelay: 1500,
    loop: true,
    loopCount: false,
    showCursor: true,
    cursorChar: '|',
    contentType: 'html',
});