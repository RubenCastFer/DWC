class Alumno extends Persona{
    constructor(datos,curso,notas){ 
        super(datos);
        this.curso=curso;
        this.notas=notas;
    };

    imprimirAlumno(){
        document.write("Nombre: "+this.nombre+"<br>Apellido1: "+this.apellido1+"<br>Apellido2: "+this.apellido2+"<br>DNI: "+this.dni+"<br>Fecha de nacimiento: "+this.fecha+"<br>Curso: "+this.curso+"<br>")
    };

    notaMedia(){
        var media=0;
        let valores= this.notas.values();
        for(let v of valores){
            media=media+parseInt(v);
        }
        media=media/this.notas.size;
        return media;
    };

    mejorNota(){
        let valores= this.notas.values();
        var valorNotaMayor=Math.max(...valores);
        const valorModulosNotas = new Map();

        for(let [clave,valor] of this.notas){
            if (valor==valorNotaMayor) {
                valorModulosNotas.set(clave,valor);
            }
        }
        return valorModulosNotas;
   
    };
    
}