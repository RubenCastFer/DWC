//REST            ...restParam lo pasa todo a un array
var mayorMenor = (...numeros)=>{
    //SPREAD             ...array(el que sea) transforma en argumentos            
    var mayor = Math.max(...numeros);
    var menor = Math.min(...numeros);
    alert("El mayor valor es "+ mayor+ " y el menor valor es "+ menor);

}

mayorMenor(0,6,8,1,5);