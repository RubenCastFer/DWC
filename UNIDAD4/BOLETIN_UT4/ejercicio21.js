var prueba = "Ruben,Castellano,Fernandez,48963910s,01-06-1996";
var salir = true;
var contador = 0;
var fin=10;
var arrayDatos = [];

var buscarApellidos = (conjuntoDatos,apellido)=>{
    var encontrado = -1;
    for (let i = 0; i < conjuntoDatos.length; i++) {
        var fila = conjuntoDatos[i];
        for (let z = 0; z < fila.length; z++) {
            var dato = fila[z];
            if(dato.toUpperCase()==apellido.toUpperCase()){
                encontrado = 1;
                return i;
            }
            
        }
        
    }
    return encontrado;

}
var buscarDNI = (conjuntoDatos,dni)=>{
    var encontrado = -1;
    for (let i = 0; i < conjuntoDatos.length; i++) {
        var fila = conjuntoDatos[i];
        for (let z = 0; z < fila.length; z++) {
            var dato = fila[z];
            if(dato.toUpperCase()==dni.toUpperCase()){
                encontrado = 1;
                return i;
            }
            
        }
        
    }
    return encontrado;
}

var buscarEdad = (datos,años)=>{
    
}

while(salir==true){
    contador++;
    //var datos = prompt("introduzca, nombre, apellidos, DNI y fecha de nacimiento separado por comas.");
    var datos = prueba; 
    //if(datos==""){
    if(contador==fin){
        salir=false;
    } else{
        arrayDatos.push(datos.split(","));
    }
}

console.log(arrayDatos)

/*arrayDatos.forEach(persona => {
    persona.forEach(dato => {
        document.write(dato+" ")
    });
    document.write("</br>")
});*/

//apellidos
var resultadoApellido = buscarApellidos(arrayDatos,"astellano")

if (resultadoApellido>=0) {
    var persona = new Array(arrayDatos[resultadoApellido]);
    for (let i = 0; i < persona.length; i++) {
        var dato = persona[i];
        document.write(dato+" ")
        document.write("</br>");
    }
} else {
    document.write("No hay coincidencia con el apellido introducido")
}
//dni
var resultadoApellido = buscarDNI(arrayDatos,"48963910S")

if (resultadoApellido>=0) {
    var persona = new Array(arrayDatos[resultadoApellido]);
    for (let i = 0; i < persona.length; i++) {
        var dato = persona[i];
        document.write(dato+" ")
        document.write("</br>");
    }
} else {
    document.write("No hay coincidencia con el dni introducido")
}
    