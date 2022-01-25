class Paciente extends Persona{
    constructor(nombre, apellido, dni,nAfiliacion,mutualista){
        super(nombre, apellido, dni);
        this.nAfiliacion=nAfiliacion;
        this.mutualista=mutualista;
    };

    imprimirPaciente(){
        super.imprimirPersona();
        document.write(" Numero de Afiliacion: "+ this.nAfiliacion+" Mutualista: "+this.mutualista);
    };
}