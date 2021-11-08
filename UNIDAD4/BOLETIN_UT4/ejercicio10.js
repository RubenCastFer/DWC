function elMenor1 (...numeros){
    return Math.min(...numeros);
}

var elMenor2 = (...numeros)=>{
    return Math.min(...numeros);
}

var colocaEnMedio = (array1, array2)=>{
    var mitad = Math.trunc(array1.length/2);
    array1.splice(mitad, 0 , array2);
    return array1;
}

var uneArrays = (...arrays)=>{
    var devolver=[];

    for(var i=0; i<arrays.length;i++){
        devolver=devolver.concat(arrays[i]);
    }
    return devolver;
}

var conjunto1 = new Array (1,3,4,5);
var conjunto2 = new Array ("b","c","d");
var conjunto3 = new Array (6,7,8,9,10);
var conjunto4 = new Array ("b","c","d");

var conjuntoUnido = new Array (uneArrays(conjunto1,conjunto2,conjunto3,conjunto4));


document.write(elMenor1(1,2,3,4,5)+" "+elMenor2(6,7,8,9,10)+"</br>");
document.write(colocaEnMedio(conjunto1,conjunto2)+"</br>");
conjuntoUnido.forEach(element => {
    document.write(element+" ")
});