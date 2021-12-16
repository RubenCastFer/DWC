var contadorPalabrasTotales = 0;
var contadorPalabrasC = 0;
var contadorPalabrasÑ = 0;
var finalizar = false
while(finalizar == false){
    var nombre = prompt("Introduce un nombre o finaliza con ULTIMO");
    contadorPalabrasTotales++;
    if (nombre.toUpperCase().charAt(0)=="C"){
        contadorPalabrasC++;
    }
    if (nombre.toUpperCase().indexOf("Ñ")!=-1){
        contadorPalabrasÑ++;
    }
    if (nombre.toUpperCase()=="ULTIMO"){
        finalizar=true;
    }
}
document.write("Se han contado "+ contadorPalabrasTotales +" palabras, " 
+  contadorPalabrasC +" palabras que empiecen por C y " + contadorPalabrasÑ 
+ " palabras que contengan la ñ.");