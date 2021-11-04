var x = parseInt(prompt("Introduzca la coordenada x del punto"));
var y = parseInt(prompt("Introduzca la coordenada y del punto"));

if ( x > 0 && y > 0){
    console.log("El punto esta en el cuadrante 1");
    document.write("El punto esta en el cuadrante 1");
} else if ( x < 0 && y > 0 ){
    console.log("El punto esta en el cuadrante 2");
    document.write("El punto esta en el cuadrante 2");
} else if ( x < 0 && y < 0 ){
    console.log("El punto esta en el cuadrante 3");
    document.write("El punto esta en el cuadrante 3");
} else if ( x > 0 && y < 0 ){
    console.log("El punto esta en el cuadrante 4");
    document.write("El punto esta en el cuadrante 4");
} else if ( x == 0 && y == 0 ){
    console.log("El punto esta sobre el origen");
    document.write("El punto esta sobre el origen");
} else if ( x == 0 || y == 0 ){
    console.log("El punto esta sobre un eje");
    document.write("El punto esta sobre un eje");
} 