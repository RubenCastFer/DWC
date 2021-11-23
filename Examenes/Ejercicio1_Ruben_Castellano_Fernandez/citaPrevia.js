class CitaPrevia{
    constructor(fechaHora,paciente,medico){
        this.fechaHora=fechaHora;
        this.paciente=paciente;
        this.medico=medico;
    };

    imprimirCitaPrevia(){
        
        document.write(this.fechaHora);
        document.write(" ");
        this.paciente.imprimirPaciente();
        document.write(" ");
        this.medico.imprimirMedico();

    };
}