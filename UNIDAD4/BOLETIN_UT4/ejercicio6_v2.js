var sumar = (...restParams)=> {
    var suma =0;
    
    for (let index = 0; index < restParams.length; index++) {
        suma+=restParams[index];
        
    }
    
    return suma;
}
var resultado = sumar(1,2,3,4);
alert(resultado);