//Primera fecha
/*var dia = parseInt(prompt("introduce el dia de la primera fecha  "));
while(dia<1 || dia>31){
    var dia = parseInt(prompt("introduce el dia de la primera fecha "));
}
var mes = parseInt(prompt("introduce el mes de la primera fecha "));
while(mes<1 || mes>12){
    var mes = parseInt(prompt("introduce el mes de la primera fecha "));
}
var año = parseInt(prompt("introduce el año  de la primera fecha"));
while(año<0){
    var año = parseInt(prompt("introduce el año  de la primera fecha"));
}
fecha = new Date(año, mes-1, dia).getTime();

var dia2 = parseInt(prompt("introduce el dia de la segunda fecha "));
while(dia2<1 || dia2>31){
    var dia2 = parseInt(prompt("introduce el dia de la segunda fecha "));
}
var mes2 = parseInt(prompt("introduce el mes de la segunda fecha "));
while(mes<1 || mes>12){
    var mes2 = parseInt(prompt("introduce el mes de la segunda fecha "));
}
var año2 = parseInt(prompt("introduce el año de la segunda fecha "));
while(año2<0){
    var año2 = parseInt(prompt("introduce el año de la segunda fecha "));
}fecha2 = new Date(año2, mes2-1, dia2).getTime();

var dia3 = parseInt(prompt("introduce el dia de la tercera fecha "));
while(dia<1 || dia3>31){
    var dia3 = parseInt(prompt("introduce el dia de la tercera fecha "));
}
var mes3 = parseInt(prompt("introduce el mes de la tercera fecha "));
while(mes3<1 || mes3>12){
    var mes3 = parseInt(prompt("introduce el mes de la tercera fecha "));
}
var año3 = parseInt(prompt("introduce el año de la tercera fecha "));
while(año3<0){
    var año3 = parseInt(prompt("introduce el año de la tercera fecha "));
}fecha3 = new Date(año3, mes3-1, dia3).getTime();




if (fecha>fecha2 && fecha>fecha3 && fecha2>fecha3 ){
    alert("La primera fecha es mayor y la tercera fecha es la menor");
    alert((fecha-fecha3)*1000);

} else if(fecha>fecha2 && fecha>fecha3 && fecha3 > fecha2){
    alert("La primera fecha es mayor");
    alert((fecha1-fecha2)*1000);

} else if (fecha2>fecha && fecha2>fecha3 && fecha > fecha3 ){
    alert("La segunda fecha es mayor y la tercera fecha es la menor");
    alert((fecha2-fecha3)*1000);

} else if(fecha2>fecha && fecha2>fecha3 && fecha3 > fecha){
    alert("La segunda fecha es mayor y la primera es la menor");
    alert((fecha2-fecha)*1000);

} else if (fecha3>fecha && fecha3>fecha2 && fecha > fecha2 ){
    alert("La tercera fecha es mayor y la segunda fecha es la menor");
    alert((fecha3-fecha2)*1000);

} else if(fecha3>fecha && fecha3>fecha2 && fecha2 > fecha){
    alert("La tercera fecha es mayor y la primera es la menor");
    alert((fecha3-fecha)*1000);

}  else {
    alert("Las fechas son iguales");
}
*/
var terminar = false;
var mayor=0;
var menor=0;
var diferencia;
var pedirDatos = prompt("Introduce una fecha con el siguiente formato (dd/mm/YYYY):");
var arrayFecha = pedirDatos.split("/")
var fecha= new Date(arrayFecha[2],arrayFecha[1]-1, arrayFecha[0]).getTime();
menor = fecha;

while(terminar==false){
    pedirDatos = prompt("Introduce una fecha con el siguiente formato (dd/mm/YYYY):");
    arrayFecha = pedirDatos.split("/")
    fecha= new Date(arrayFecha[2],arrayFecha[1]-1, arrayFecha[0]).getTime();

    if (fecha<menor){
        menor = fecha;
    } else if (fecha > mayor){
        mayor = fecha;
    }
    

    console.log("mayor " + mayor);
    console.log("menor " + menor);

    var continuar = prompt("¿Desea continuar? (S/n)");
    if (continuar=="n"||continuar=="N"){
        terminar=true;
    }
    console.log(terminar);

}
diferencia = (mayor-menor)*1000;
alert("La diferencia entre el mayor y el menor es de "+ diferencia+ " segundos.");
