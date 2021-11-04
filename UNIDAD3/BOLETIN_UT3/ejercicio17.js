var cadena = prompt("Introduce una cadena: ");
var caracter = "";
var caracterCompara="";
var contadorCaracter=0;
var contadorCompara=0;
caracter = cadena.charAt(0);
for (var i = 0; i<cadena.length;i++ ){
    
        contadorCompara=0;
        caracterCompara = cadena.charAt(i);

        for( var x = 0; x<cadena.length;x++){
        
            if(caracterCompara==cadena.charAt(x)){
                contadorCompara++;
            }
        }
        if (contadorCompara>contadorCaracter){
            caracter=caracterCompara;
            contadorCaracter=contadorCompara;
        }
        
    
}

document.write(caracter+"</br>");
document.write(contadorCaracter);