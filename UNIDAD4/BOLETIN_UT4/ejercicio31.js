var sesionCalificacion = new Array();
sesionCalificacion.push(["Ruben","Ferrari",(140/1000)]);
sesionCalificacion.push(["Manue","Lotus",(160/1000)]);
sesionCalificacion.push(["Ale","Honda",(230/1000)]);
sesionCalificacion.push(["David","Mercedes",(120/1000)]);

sesionCalificacion.forEach(element => {
    element.forEach(dato => {
        document.write(dato+" ");
    });
    document.write("<br>")
});
