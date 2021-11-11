var prueba = "Ruben,Castellano,Fernandez,48963910s,01-06-1996";
var salir = true;
var contador = 0;
var fin=10;
var arrayDatos = [];

while(salir==true){
    //contador++;
    var datos = prompt("introduzca, nombre, apellido1, apellido2, DNI y fecha de nacimiento separado por comas.");
    //var datos = prueba; 
    if(datos==""){
    //if(contador==fin){
        salir=false;
    } else{
        arrayDatos.push(datos.split(","));
    }
}

console.log(arrayDatos);
arrayDatos.forEach(persona => {
    persona.forEach(dato => {
        document.write(dato+" ")
    });
    document.write("</br>")
});