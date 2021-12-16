function inicializar(){
    document.getElementById("crear-ventana").onclick=crearNueva;
    document.getElementById("cerrar-ventana").onclick=cerrarNueva;
}
var nuevaVentana;
function crearNueva(){
    //nuevaVentana = window.open("","","height=400,width=800");
    alert("El ancho de la pantalla es de "+ screen.width+"px.\nEl alto de la pantalla es de " + screen.height +"px.\nLa profundidad de color de la ventana es de "+ screen.colorDepth+"bits.");
    

    
}
function cerrarNueva(){
    if (nuevaVentana){
        nuevaVentana.close(); nuevaVentana = null;
    }
}