//citaPrevia1
var paciente = new Paciente("Ruben","Castellano","48963910s","an5494984",false)

var medico = new Medico("Elena","Fernandez","49963910s","5494984");

var fechaHora = new Date(2002,06,03,10,36,12);

var citaPrevia= new CitaPrevia(fechaHora,paciente, medico);


//citaPrevia2
var paciente2 = new Paciente("Juaquin","Fernandez","48973910s","an5484984",true)

var medico2 = new Medico("Elena","Fernandez","49963910s","5494984");

var fechaHora2= new Date(2021,10,03,11,20,12);

var citaPrevia2= new CitaPrevia(fechaHora2,paciente2, medico2);


//citaPrevia3
var paciente3 = new Paciente("Jua","Andez","53973910s","an4584984",true)

var medico3 = new Medico("Juana","Castillo","59963910s","2494984");

var fechaHora3= new Date(2020,01,03,12,36,12);

var citaPrevia3= new CitaPrevia(fechaHora3,paciente3, medico3);

//array
var arrayCitas = new Array()


//funciones

//introrduce
var introduceCita = (a)=>{
    arrayCitas.push(a);
}

//buscar por dni
var buscarCita = (dni)=>{
    //return arrayCitas.filter((citaPrevia)=> citaPrevia.paciente.dni.toUpperCase()==dni.toUpperCase());
    return arrayCitas.findIndex((citaPrevia)=> citaPrevia.paciente.dni.toUpperCase()==dni.toUpperCase());

}

//elimina por dni llamando a buscarcita
var eliminarCita = (dni)=>{
    var index = buscarCita(dni);
    if (index!=-1) {
        arrayCitas.splice(index,1);
        return true
    } else {
        document.write("La cita no ha sido encontrada")
    }
    return false;

}

//Mostrar todas las citas

var mostrarCitas = ()=>{
    arrayCitas.forEach(cita => {
    cita.imprimirCitaPrevia();
    document.write("<br>");
    });
}

//ordenar por fechas (descendente, de mayor a menor)
var ordenaCitasPorFechaHora =()=>{
    return arrayCitas.sort((cita1,cita2)=>{
        if (cita1.fechaHora.getTime()<cita2.fechaHora.getTime()){
            return 1;
    } else if (cita1.fechaHora.getTime()>cita2.fechaHora.getTime()){
            return -1;
    }
    return 0;
    });
}

//devuelve un array con los de la mutua

var devuelArrayMutua = () => {
    var arrayMutualista =new Array();
    arrayCitas.forEach(citaPrevia => {
        if(citaPrevia.paciente.mutualista == true){
            arrayMutualista.push(citaPrevia);
        }
    });
    return arrayMutualista;
}

//pruebas

//prueba introducir
introduceCita(citaPrevia3);
introduceCita(citaPrevia2);
introduceCita(citaPrevia);



//Prueba buscar Cita
var resultbuscarCita = buscarCita("48963910s");
document.write(arrayCitas[resultbuscarCita].imprimirCitaPrevia());
document.write("<br>");

document.write("<br>");

//Prueba eliminar Cita
var resultEliminarCita =eliminarCita("48963910s");
document.write(resultEliminarCita);
document.write("<br>");



mostrarCitas();
document.write("<br>");

ordenaCitasPorFechaHora();

mostrarCitas();
document.write("<br>");
document.write("<br>");

var arrayMutua = devuelArrayMutua();
arrayMutua.forEach(element => {
    element.imprimirCitaPrevia();
    document.write("<br>");
});

