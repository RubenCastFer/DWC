var n = parseInt(prompt("Introduce un numero"));
var contador = 0;
var cuadrado;
var cubo;

for (var i=0; i<=n ;i++){
    
    console.log(i)
    cuadrado = Math.pow(i,2);
    console.log("El cuadrado de " + i + " es " + cuadrado);
    cubo = Math.pow(i,3);
    console.log("El cubo de " + i + " es " + cubo);
    
    contador = contador+i+cuadrado+cubo;
    console.log("El contador total va por "+ contador);
    
}

console.log("El contador final es "+ contador);