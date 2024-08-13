//Seteo la fecha del evento con el formato MMDDAAAA HH:MM:SS
let fecha_evento = new Date("10/02/2024 20:10:00");
let msFecha = fecha_evento.getTime();

//obtengo los elementos del DOM que contiene los 
//valores de la regrisiva.
let v_dia = document.querySelector("#dias");

//Creo la funcion que realizara la cuenta regresiva

