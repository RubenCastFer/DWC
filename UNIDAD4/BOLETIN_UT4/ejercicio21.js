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

var buscarEdad = (conjuntoDatos,edad)=>{
    var encontrado = -1;
    for (let i = 0; i < conjuntoDatos.length; i++) {
        var fila = conjuntoDatos[i];
        
            var dato = fila[4];
            arrayFecha = dato.split("-")
            fecha= new Date(arrayFecha[2],arrayFecha[1]-1, arrayFecha[0]).getTime();
            var fechaActual = Date.now();
            var añoActual= new Date(fechaActual);
            var año= new Date(fecha);
            var años = añoActual.getFullYear()-año.getFullYear();
            

            if(años==edad){
                encontrado = 1;
                return i;
            }
            
        
        
    }
    return encontrado;
   
    
}

while(salir==true){
    //contador++;
    var datos = prompt("introduzca, nombre, apellidos, DNI y fecha de nacimiento separado por comas.");
    //var datos = prueba; 
    if(datos==""){
    //if(contador==fin){
        salir=false;
    } else{
        arrayDatos.push(datos.split(","));
    }
}

console.log(arrayDatos)

salir = true;
do {
    /*var realizar=prompt("Desea imprimir, buscar por apellido, buscar por dni o por edad: ")

    if(realizar.toUpperCase()=="IMPRIMIR"){
        arrayDatos.forEach(persona => {
            persona.forEach(dato => {
                document.write(dato+" ")
            });
            document.write("</br>")
        });
    }else if(realizar.toUpperCase()=="APELLIDO"){
        //apellidos
        var apellido=prompt("Introduzca el apellido")

        var resultadoApellido = buscarApellidos(arrayDatos,apellido)

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
    }else if(realizar.toUpperCase()=="DNI"){
        //dni
        var dni=prompt("Introduzca el dni")

        var resultadoApellido = buscarDNI(arrayDatos,dni)

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


    }else if(realizar.toUpperCase()=="EDAD"){
        
        //edad
        var edad=prompt("Introduzca la edad")

        var resultadoApellido = buscarEdad(arrayDatos,edad)

        if (resultadoApellido >= 0) {
            var persona = new Array(arrayDatos[resultadoApellido]);
            for (let i = 0; i < persona.length; i++) {
                var dato = persona[i];
                document.write(dato+" ")
                document.write("</br>");
            }
        } else {
            document.write("No hay coincidencia con la edad introducido")
        }

    } else{*/
        var continuar=prompt("Desea terminar S/n");
        if (continuar.toUpperCase=="S") {
            salir=false;
        } else{
            salir=true;
        }
        
    //}
    
} while (salir==true);

    