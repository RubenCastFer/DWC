var tiempo = parseInt(prompt("Introduce una cantidad de tiempo en segundos: "));

var horas;
var minutos
var segundos;

horas = Math.trunc(tiempo/(60*60));
tiempo = tiempo%(60*60);
minutos = Math.trunc(tiempo/(60));
tiempo = tiempo%(60);
segundos = Math.trunc(tiempo);

document.write(horas+"H, "+minutos+"m,"+segundos+"s");