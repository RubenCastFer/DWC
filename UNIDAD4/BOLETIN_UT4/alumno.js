class Alumno extends Persona{
    constructor(datos){ 
        var arrayDatos=datos.split(",");
        this.nombre=arrayDatos[0];
        this.apellido1=arrayDatos[1];
        this.apellido2=arrayDatos[2];
        this.dni=arrayDatos[3];
        this.fecha=arrayDatos[4];
    };

    imprimirDatos(){
        document.write("Nombre: "+this.nombre+"<br>Apellido1: "+this.apellido1+"<br>Apellido2: "+this.apellido2+"<br>DNI: "+this.dni+"<br>Fecha de nacimiento: "+this.fecha)
    };
}