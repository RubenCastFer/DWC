var numero = parseInt(prompt("Cuantos numeros quieres usar: "))

var rellenar = (veces)=>{
    var array = [];
    for (let index = 0; index < veces; index++) {
        array[index]=Math.floor(Math.random() * 10);
    }
    return array;
}

var arrayDevuelto = rellenar(numero);
console.log(arrayDevuelto);
