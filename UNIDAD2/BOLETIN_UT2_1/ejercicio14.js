var media=0;
var mediaTotal=0;
var mediaH=0;
var mediaM=0;

var dato=0;
var sexo;
var terminar = false;
var contadorTotal = 0;
var contadorM = 0;
var contadorH = 0;
do{
    
    do{
    sexo = prompt("Introduce H para hombre, M para mujer o * para terminar")
    //sexo.toString();
    if (sexo == "*"){
        terminar= true;
        finalizar=true
        
    }
    if (sexo=="m"||sexo=="M"){
        contadorM++;
        terminar=true;
        finalizar=false;
        
        do {
            
            dato = parseInt(prompt("Introduce un salario entre 1000 y 2000"));
        
        } while (dato<1000 || dato >2000);
            media += dato;
            contadorTotal++;
            mediaM+=dato;
    }
    if (sexo=="h"||sexo=="H"){
        contadorH++;
        terminar=true;
        finalizar=false;
        do {
           
            dato = parseInt(prompt("Introduce un salario entre 1000 y 2000"));
        
        } while (dato<1000 || dato >2000);
            media += dato;
            contadorTotal++;
            mediaH += dato;
    }
    } while (terminar == false); 
    
} while (finalizar == false);
var mediaT=media/contadorTotal;
var mediaM=mediaM/contadorM;
var mediaH=mediaH/contadorH;

document.write("La media total seria de " + mediaT + ", la media segun las mujeres seria de " + mediaM+ ", la media segun los hombres seria de " + mediaH);