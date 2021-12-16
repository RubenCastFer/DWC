var sumar = (...restParams)=> {
    var suma =0;
    
    restParams.forEach(numero => {
        suma+=numero;
    });
    
    return suma;
}
var resultado = sumar(1,2,3,4);
alert(resultado);