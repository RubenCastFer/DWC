class Persona{
    constructor(nombre,apellido1,apellido2,dni,fecha){ 

        this.nombre=nombre;
        this.apellido1=apellido1;
        this.apellido2=apellido2;
        this.dni=dni;
        this.fecha=fecha;
    };

    imprimirDatos(){
        document.write("Nombre: "+this.nombre+"<br>Apellido1: "+this.apellido1+"<br>Apellido2: "+this.apellido2+"<br>DNI: "+this.dni+"<br>Fecha de nacimiento: "+this.fecha)
    };
}