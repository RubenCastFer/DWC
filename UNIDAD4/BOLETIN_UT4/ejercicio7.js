var mayorMenor = (...restParams)=>{
    var mayor = Math.max(...restParams);
    var menor = Math.min(...restParams);
    alert("El mayor valor es "+ mayor+ " y el menor valor es "+ menor);

}

mayorMenor(0,6,8,1,5);