
var datos = prompt("Introduzca: nombre, apellido1, apellido2, DNI y fecha de nacimiento separado por comas.");
var curso = prompt("Introduzca el curso");

const moduloNota = new Map();

var salir=true;

while(salir==true){
    var modulo = prompt("introduzca el modulo y su nota correspondiente. Atengase al siguiete formato (Modulo:nota).");
   
    if(modulo==""){
        salir=false;
    } else{
       let arrayDatos=modulo.split(":");
       moduloNota.set(arrayDatos[0],arrayDatos[1])
    }
}

var alumno = new Alumno(datos,curso,moduloNota);

document.write(alumno.imprimirAlumno());
document.write("La nota media del alumno es: "+alumno.notaMedia()+"<br>");
var resultadoMejorNota= alumno.mejorNota();
document.write("Nota/s mas alta/s<br>");
for(let[clave,valor] of resultadoMejorNota){
    document.write(clave+" "+valor+"<br>");
}