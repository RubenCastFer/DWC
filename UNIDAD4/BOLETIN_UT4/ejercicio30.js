const moduloNota = new Map();
moduloNota.set("DWECL",6);
moduloNota.set("DWES",3);
moduloNota.set("DAW",5);
moduloNota.set("DIW",2);

var alumno = new Alumno("Ruben","Castellano","Fernandez","48963910s","01-06-1996","2 DAW",moduloNota);


const moduloNota1 = new Map();
moduloNota1.set("DWECL",4);
moduloNota1.set("DWES",5);
moduloNota1.set("DAW",7);
moduloNota1.set("DIW",10);

var alumno2 = new Alumno("Manu","Castillo","Fernando","49963910a","01-06-1997","2 DAW",moduloNota1);

const moduloNota2 = new Map();
moduloNota2.set("DWECL",4);
moduloNota2.set("DWES",5);
moduloNota2.set("DAW",7);
moduloNota2.set("DIW",10);

var alumno3 = new Alumno("Pablo","Cabezas","Macias","49963910b","01-07-1997","2 DAW",moduloNota2);

var alumnos = new Array(alumno, alumno2, alumno3);

var clase = new Aula(alumnos);

clase.imprimirAlumnos();

//var resulBusqueda=clase.buscarAlumno("48963910s");
//resulBusqueda.imprimirAlumno();

//var notaOrdenada = clase.ordenarNotaAlumno("48963910s");
/*for (const nota of notaOrdenada) {
    document.write(nota);
    document.write("<br>")
}*/
clase.ordenarAlumnosApellidos();

clase.imprimirAlumnos();
