var posicion = 0;
var texto = "Oferton!!!";
setInterval(verTexto, 150);

function verTexto(){
    posicion++;
    if(posicion>=texto.length){
        posicion=0;
    }
    window.document.title=texto.substring(posicion)+" "+texto+" "+texto+" "+texto+" "+texto;
}