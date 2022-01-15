window.addEventListener("load",inicio)

//añadir el mostrar y el ocultar.
function inicio(){
    var enlace = document.createElement('a');
    enlace.setAttribute("id","mostrarOcultar");
    //enlace.setAttribute("href","ejercicio7.html");

    var txt1 = document.createTextNode("Ocultar/Mostrar");
    enlace.appendChild(txt1);
    var div = document.createElement('div');
    div.appendChild(enlace);
    document.body.appendChild(div);
    
    var elemento1 = document.getElementById("mostrarOcultar");
    elemento1.addEventListener("click",mostrarOcultar);
}

function mostrarOcultar(){
    var tabla=document.getElementsByTagName('table')
    if (tabla[0]==undefined) {
        mostrar();
    }else{
        tabla[0].remove();
    }
}

function mostrar() {

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