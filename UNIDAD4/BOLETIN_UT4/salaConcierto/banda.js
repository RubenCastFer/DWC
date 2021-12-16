class Banda{
    constructor(nombre,fecha,integrantes,telefono,estilo){
        this.nombre=nombre;
        this.fecha=fecha;
        this.integrantes=integrantes;
        this.telefono=telefono;
        this.estilo=estilo;
    };

    mostrarBanda(){
        document.write("Nombre de la banda: "+this.nombre+"<br>Año de formacion: "+this.fecha+"<br>");
        this.mostrarIntegrantes();
        document.write("Telefono de contacto: "+this.telefono+"<br>Estilo: "+ this.estilo+"<br>");
    };

    mostrarIntegrantes(){
        document.write("Integrantes: <br>");
        for (const [clave, valor] of this.integrantes) {
            document.write("DNI: "+ clave+"<br>");
            document.write("Nombre: "+ valor[0]+"<br>");
            document.write("Apellidos: "+ valor[1]+"<br>");
        }
        document.write("<br>");    
    };
}