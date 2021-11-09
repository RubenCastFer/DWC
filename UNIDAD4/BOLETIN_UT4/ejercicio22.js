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
        //calcular edad
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

var mayorEdad = (conjuntoDatos)=>{
    var encontrado = -1;
    var arrayNuevo = [];
    for (let i = 0; i < conjuntoDatos.length; i++) {
        var fila = conjuntoDatos[i];
        //calcular edad
        var dato = fila[4];
        arrayFecha = dato.split("-")
        fecha= new Date(arrayFecha[2],arrayFecha[1]-1, arrayFecha[0]).getTime();
        var fechaActual = Date.now();
        var añoActual= new Date(fechaActual);
        var año= new Date(fecha);
        var años = añoActual.getFullYear()-año.getFullYear();
        if(años>=18){
            var encontrado = 1;
            arrayNuevo.push(conjuntoDatos[i])
        }     
    }
    if (arrayNuevo.length!=0) {
        return arrayNuevo;
    }else{
        return encontrado;
    }
}

var menorEdad = (conjuntoDatos)=>{
    var encontrado = -1;
    var arrayNuevo = [];
    for (let i = 0; i < conjuntoDatos.length; i++) {
        var diferenciaEdad = [];
        
        var fila = conjuntoDatos[i];
        //calcular edad
        var dato = fila[4];
        arrayFecha = dato.split("-")
        fecha= new Date(arrayFecha[2],arrayFecha[1]-1, arrayFecha[0]).getTime();
        var fechaActual = Date.now();
        var añoActual= new Date(fechaActual);
        var añosParaMayorEdad = new Date((añoActual.getFullYear()-18),añoActual.getMonth(),añoActual.getDate()).getTime();
        var año= new Date(fecha);
        var dias = fecha-añosParaMayorEdad;
        var años = añoActual.getFullYear()-año.getFullYear();
        if(años<=18){
            dias = dias/(1000*3600*24);
            diferenciaEdad.push(fila[0])
            diferenciaEdad.push(fila[1])
            diferenciaEdad.push(fila[2])
            diferenciaEdad.push(dias);
            diferenciaEdad.push(18-años);

            var encontrado = 1;
            arrayNuevo.push(diferenciaEdad)
        }     
    }
    if (arrayNuevo.length!=0) {
        return arrayNuevo;
    }else{
        return encontrado;
    }
}

var modificaDatos = (conjuntoDatos,dni,dato,modificacion)=>{
    var encontrado = -1;
    for (let i = 0; i < conjuntoDatos.length; i++) {
        var fila = conjuntoDatos[i];
        for (let z = 0; z < fila.length; z++) {
            var columna = fila[z];
            if(columna.toUpperCase()==dni.toUpperCase()){
                var seguro;
                dato=dato.toUpperCase();
                switch (dato) {
                    case "NOMBRE":
                        seguro = prompt("¿Seguro que desea plicar los cambios?(S/n)");
                        if (seguro.toUpperCase()=="S") {
                            conjuntoDatos[i][0]=modificacion;
                            return conjuntoDatos;
                        }
                        break;
                    case "APELLIDO1":
                        seguro =prompt("¿Seguro que desea plicar los cambios?(S/n)");
                        if (seguro.toUpperCase()=="S") {
                            conjuntoDatos[i][1]=modificacion;
                            return conjuntoDatos;
                        }                        
                        break;
                    case "APELLIDO2":
                        seguro =prompt("¿Seguro que desea plicar los cambios?(S/n)");
                        if (seguro.toUpperCase()=="S") {
                            conjuntoDatos[i][2]=modificacion;
                            return conjuntoDatos;
                        }                        
                        break;
                    case "DNI":
                        seguro =prompt("¿Seguro que desea plicar los cambios?(S/n)");
                        if (seguro.toUpperCase()=="S") {
                            conjuntoDatos[i][3]=modificacion;
                            return conjuntoDatos;
                        }                        
                        break;
                    case "FECHA":
                        seguro =prompt("¿Seguro que desea plicar los cambios?(S/n)");
                        if (seguro.toUpperCase()=="S") {
                            conjuntoDatos[i][4]=modificacion;
                            return conjuntoDatos;
                        }                        
                        break;
                        
                    default:
                        break;
                }
                
            }   
        }     
    }
    return encontrado;
}

var eliminaUsuario = (conjuntoDatos,dni)=>{
    var encontrado = -1;
    for (let i = 0; i < conjuntoDatos.length; i++) {
        var fila = conjuntoDatos[i];
        for (let z = 0; z < fila.length; z++) {
            var columna = fila[z];
            if(columna.toUpperCase()==dni.toUpperCase()){
                seguro =prompt("¿Seguro que desea plicar los cambios?(S/n)");
                        if (seguro.toUpperCase()=="S") {
                            conjuntoDatos.splice(i,1)
                            return conjuntoDatos;
                        } 
            }
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
var continuar;
while (salir==true) {
    var realizar=prompt("Desea imprimir(IMPRIMIR), buscar por apellido(APELLIDO), buscar por dni(DNI), buscar por edad(EDAD), cribar por mayor de edad (MAYOREDAD), cribar por menor de edad (MENOREDAD), modificar datos(MODIFICARDATOS), eliminar usuario(ELIMINAR): ")

    if(realizar.toUpperCase()=="IMPRIMIR"){
        arrayDatos.forEach(persona => {
            persona.forEach(dato => {
                document.write(dato+" ")
            });
            document.write("</br>")
        });
    }else if(realizar.toUpperCase()=="APELLIDO"){
        //apellido
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
        continuar=prompt("Desea terminar S/n");
        if (continuar.toUpperCase()=="S") {
            salir=false;
        } else{
            salir=true;
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
        continuar=prompt("Desea terminar S/n");
        if (continuar.toUpperCase()=="S") {
            salir=false;
        } else{
            salir=true;
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
        continuar=prompt("Desea terminar S/n");
        if (continuar.toUpperCase()=="S") {
            salir=false;
        } else{
            salir=true;
        }

    } else if(realizar.toUpperCase()=="MAYOREDAD"){
        
        var resultadoMayorEdad=mayorEdad(arrayDatos);
        
        

        var altura=380;
        var anchura=630;
         
        // calculamos la posicion x e y para centrar la ventana
        var y=parseInt((window.screen.height/2)-(altura/2));
        var x=parseInt((window.screen.width/2)-(anchura/2));
        
        var preparar="";
        resultadoMayorEdad.forEach(persona => {
            persona.forEach(dato => {
                preparar= preparar+" "+dato;
            });
            preparar= preparar+"</br> ";
        });
        
        
        var nuevaVentana;
        if(preparar!=""){
            nuevaVentana = window.open("","",'width='+anchura+',height='+altura+',top='+y+',left='+x+',toolbar=no,location=no,status=no,menubar=no,scrollbars=no,directories=no,resizable=no');
            nuevaVentana.document.write(preparar);
            
        } else{
           document.write("No ha introducido");
        }

        continuar=prompt("Desea terminar S/n");
        if (continuar.toUpperCase()=="S") {
            salir=false;
        } else{
            salir=true;
        }


    }else if(realizar.toUpperCase()=="MENOREDAD"){
        var resultadoMenorEdad=menorEdad(arrayDatos);
       
        var altura=380;
        var anchura=630;
         
        // calculamos la posicion x e y para centrar la ventana
        var y=parseInt((window.screen.height/2)-(altura/2));
        var x=parseInt((window.screen.width/2)-(anchura/2));
        
        var preparar="Nombre Apellido1 Apellido2 dia año </br>";
        resultadoMenorEdad.forEach(persona => {
            persona.forEach(dato => {
                preparar= preparar+" "+dato;
            });
            preparar= preparar+"</br> ";
        });

        var nuevaVentana;
        if(preparar!="Nombre Apellido1 Apellido2 dia año </br>"){
            nuevaVentana = window.open("","",'width='+anchura+',height='+altura+',top='+y+',left='+x+',toolbar=no,location=no,status=no,menubar=no,scrollbars=no,directories=no,resizable=no');
            nuevaVentana.document.write(preparar);
            
        } else{
           document.write("No ha introducido");
        }

        continuar=prompt("Desea terminar S/n");
        if (continuar.toUpperCase()=="S") {
            salir=false;
        } else{
            salir=true;
        }


    }else if(realizar.toUpperCase()=="MODIFICARDATOS"){

        var datoAModificar=prompt("Que dato desea modifcar (nombre,apellido1,apellido2,dni,fecha): ");
        var modifica=prompt("Introduce la modificacion");
        var dniUsuario =prompt("Intorduce el dni del usuario que vas a modificar");
        arrayDatos = modificaDatos(arrayDatos,dniUsuario,datoAModificar,modifica)
        if (arrayDatos!=-1){
            alert("El usuario con el dni "+ dniUsuario +" ha sido modificado.")
        } else {
            alert("El usuario con el dni "+ dniUsuario +" no ha sido modificado.")

        }

        continuar=prompt("Desea terminar S/n");
        if (continuar.toUpperCase()=="S") {
            salir=false;
        } else{
            salir=true;
        }
    }else if(realizar.toUpperCase()=="ELIMINAR"){

        var dniUsuario =prompt("Intorduce el dni del usuario que vas Eliminar");
        arrayDatos = eliminaUsuario(arrayDatos,dniUsuario,datoAModificar,modifica)
        if (arrayDatos!=-1){
            alert("El usuario con el dni "+ dniUsuario +" ha sido eliminado.")
        } else {
            alert("El usuario con el dni "+ dniUsuario +" no ha sido eliminado.")

        }

        continuar=prompt("Desea terminar S/n");
        if (continuar.toUpperCase()=="S") {
            salir=false;
        } else{
            salir=true;
        }
    }else{
        continuar=prompt("Desea terminar S/n");
        if (continuar.toUpperCase()=="S") {
            salir=false;
        } else{
            salir=true;
        }
        
    }
    
} 

    