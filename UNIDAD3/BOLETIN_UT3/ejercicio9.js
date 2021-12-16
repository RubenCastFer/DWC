var frase = prompt("Introduzca una frase");
var i = 0;
var contarA = 0;
var contarPalaTotal=0;
while (i<frase.length) {
    if (i==0 && frase.toUpperCase().charAt(0) == "A"){
        contarA++;
    }
    if(frase.charAt(i)== " "){
        if (frase.toUpperCase().charAt(i+1) == "A"){
            contarA++;
        }
        if (frase.charAt(i-1)== " "){
            contarPalaTotal--;
        }
        contarPalaTotal++; 
    }
    i++;
}
contarPalaTotal++;
document.write("Número total de palabras "+contarPalaTotal+"</br>");
document.write("Numero palabras que empiezan por a "+contarA);
