class Aula{
    constructor(alumnos){
        this.alumnos=alumnos;
    };

    buscarAlumno(dni){
        for(alumno of this.alumnos) {
                if(alumno.dni==dni){
                    return alumno;
                }
        }
        return false;
    };

    ordenarNotaAlumno(dni){
        const notasOrdenadas = new Map();
        var alumno=this.buscarAlumno(dni);
        notasOrdenadas = [alumno.notas.entries()].sort();
    
        /*
        const myMap = new Map();
        myMap.set("a",3);
        myMap.set("c",4);
        myMap.set("b",1);
        myMap.set("d",2);

        // Ordenado por valor mayor menor
        const mapSort1 = new Map([...myMap.entries()].sort((a, b) => b[1] - a[1]));
        console.log(mapSort1);
        // Map(4) {"c" => 4, "a" => 3, "d" => 2, "b" => 1}
        // Ordenado por valor menor mayor
        const mapSort2 = new Map([...myMap.entries()].sort((a, b) => a[1] - b[1]));
        console.log(mapSort2);
        // Map(4) {"b" => 1, "d" => 2, "a" => 3, "c" => 4}

        // Ordenado por clave
        const mapSort3 = new Map([...myMap.entries()].sort());
        console.log(mapSort3);
        // Map(4) {"a" => 3, "b" => 1, "c" => 4, "d" => 2}
        // Ordenado por clave invertido
        const mapSort4 = new Map([...myMap.entries()].reverse());
        console.log(mapSort4);
        // Map(4) {"d" => 2, "b" => 1, "c" => 4, "a" => 3}
        */
    };

    ordenarAlumnosApellidos(){

    };

    imprimirAlumnos(){

        this.alumnos.forEach(alumno => {
            alumno.imprimirAlumno();
            document.write("<br>")
        });

    }

}   