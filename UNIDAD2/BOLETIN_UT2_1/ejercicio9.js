var terminar = false;
var mayor=null;
var menor=null;
var media = 0;
var numero;
var contador=0;
while(terminar==false){
    numero = parseInt(prompt("Introduce un número:"));
    media = media + numero;
  
    console.log("numero "+numero);
    console.log("suma "+media);

    if (contador==0){
        menor=numero;
    }else if (menor > numero){
        menor=numero;

    }else if (mayor < numero){
        mayor = numero;
    }

    
    console.log("menor " + menor);
    console.log("mayor " + mayor);
    console.log("contador" + contador)

    contador++;
    var continuar = prompt("¿Desea continuar? (S/n)");
    if (continuar=="n"||continuar=="N"){
        terminar=true;
    }
    console.log(terminar);

}
media/=contador;
console.log("menor " + menor);
console.log("mayor " + mayor);
console.log("la media de todos los numeros es "+ media);