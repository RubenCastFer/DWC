
var datos = prompt("Introduzca: nombre, apellido1, apellido2, DNI y fecha de nacimiento separado por comas.");
var curso = prompt("Introduzca el curso");
var arrayDatos=datos.split(",");
        
var nombre=arrayDatos[0];
var apellido1=arrayDatos[1];
var apellido2=arrayDatos[2];
var dni=arrayDatos[3];
var fecha=arrayDatos[4];

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

//creo alumno
var alumno = new Alumno(nombre,apellido1,apellido2,dni,fecha,curso,moduloNota);

document.write("Mostrar alumno<br>");
alumno.imprimirAlumno();


document.write("La nota media del alumno es: "+alumno.notaMedia()+"<br>");

var resultadoMejorNota= alumno.mejorNota();
document.write("Nota/s mas alta/s<br>");
for(let[clave,valor] of resultadoMejorNota){
    document.write(clave+" "+valor+"<br>");
}