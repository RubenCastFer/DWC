window.addEventListener("load",tabla)

function tabla() {


    var tabla = document.createElement('table');
    for (let i = 0; i < 20; i++) {
        var fila = document.createElement('tr');
        for (let z = 0; z < 20; z++) {
            var columna = document.createElement('td');
            var contenido=document.createTextNode("Columna: "+z+" Fila: "+i)
            
            columna.appendChild(contenido);
            fila.appendChild(columna);
        }   
        tabla.appendChild(fila);
    }
    document.body.appendChild(tabla);
    tabla.setAttribute("border","1px");


}