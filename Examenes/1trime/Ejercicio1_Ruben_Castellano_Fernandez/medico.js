class Medico extends Persona{
    constructor(nombre, apellido, dni,nFacultativo){
        super(nombre, apellido, dni);
        this.nFacultativo=nFacultativo;
    };

    imprimirMedico(){
        super.imprimirPersona();
        document.write(" nFacultativo: "+this.nFacultativo);
    };
}