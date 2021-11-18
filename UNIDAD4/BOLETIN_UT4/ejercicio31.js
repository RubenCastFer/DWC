var piloto1 = new Piloto("Ruben","Ferrari");
var piloto2 = new Piloto("Manue","Lotus");
var piloto3 = new Piloto("Ale","Honda");
var piloto4 = new Piloto("David","Mercedes");


var sesionCalificacion = new Array();
sesionCalificacion.push([piloto1,(14000)]);
sesionCalificacion.push([piloto2,(16000)]);
sesionCalificacion.push([piloto3,(23000)]);
sesionCalificacion.push([piloto4,(12000)]);

sesionCalificacion.forEach(elemento => {
    document.write(elemento[0].nombre+""+elemento[0].escuderia);
    document.write("<br>")
});
