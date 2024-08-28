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
            copyToClipboard(text);
        });
    }
}

// Configura los listeners para los iconos de copiar
setupCopyListener('pela-cbu', 'pela-cbu-text');
setupCopyListener('pela-alias', 'pela-alias-text');