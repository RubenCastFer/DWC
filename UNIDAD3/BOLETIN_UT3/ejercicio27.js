function inicializar(){
    document.getElementById("crear-ventana").onclick=crearNueva;
    document.getElementById("cerrar-ventana").onclick=cerrarNueva;
}
var nuevaVentana;
function crearNueva(){
    nuevaVentana = window.open("","","height=400,width=800");
    nuevaVentana.document.write("Nombre del navegador: " + navigator.appName +"\n");
    nuevaVentana.document.write("Nombre del navegador: " + navigator.appVersion +"\n")
    nuevaVentana.document.write("Nombre del navegador: " + navigator.appAgent +"\n")


    
}
function cerrarNueva(){
    if (nuevaVentana){
        nuevaVentana.close(); nuevaVentana = null;
    }
}