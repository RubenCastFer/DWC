function inicializar(){
    document.getElementById("crear-ventana").onclick=crearNueva;
    document.getElementById("cerrar-ventana").onclick=cerrarNueva;
}
var nuevaVentana;
function crearNueva(){
    nuevaVentana = window.open("","","height=400,width=800");
    for (i in navigator){
        nuevaVentana.document.write(i+"\n")
    }
}
function cerrarNueva(){
    if (nuevaVentana){
        nuevaVentana.close(); nuevaVentana = null;
    }
}