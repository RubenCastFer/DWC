var dia = parseInt(prompt("introduce el dia  "));
while(dia<1 || dia>31){
    var dia = parseInt(prompt("introduce el dia  "));
}
var mes = parseInt(prompt("introduce el mes  "));
while(mes<1 || mes>12){
    var mes = parseInt(prompt("introduce el mes  "));
}
var año = parseInt(prompt("introduce el año  "));
while(año<0){
    var año = parseInt(prompt("introduce el año  "));
}
fecha = new Date(año, mes-1, dia).getTime();

var dia2 = parseInt(prompt("introduce el dia  "));
while(dia2<1 || dia2>31){
    var dia2 = parseInt(prompt("introduce el dia  "));
}
var mes2 = parseInt(prompt("introduce el mes  "));
while(mes2<1 || mes2>12){
    var mes2 = parseInt(prompt("introduce el mes  "));
}
var año2 = parseInt(prompt("introduce el año  "));
while(año2<0){
    var año2 = parseInt(prompt("introduce el año  "));
}fecha2 = new Date(año2, mes2-1, dia2).getTime();

if (fecha>fecha2){
    alert("La primera fecha es menor");
} else if(fecha<fecha2){
    alert("La segunda fecha es mayor");
} else {
    alert("Las fechas son iguales");
}