var conjuntoDivisores = [];


var esPerfecto=(numero)=>{
    var contador=0;
    var suma=0;
    for (var divisor=1;divisor < numero; divisor++) {
        if (numero % divisor == 0) {
            conjuntoDivisores[contador]=divisor;
            contador++;
        }
    }

    for (var i=0; i<conjuntoDivisores.length;i++){
        suma += conjuntoDivisores[i]; 
    }

    if (suma==numero){
        return true;
    } else {
        return false;
    }
    
}

var numeroRecogido = parseInt(prompt("introduce un numero para comprobar si es perfecto. "))
if (esPerfecto(numeroRecogido)){
    alert(numeroRecogido+" es perfecto");
} else {
    alert(numeroRecogido+" no es perfecto");

}