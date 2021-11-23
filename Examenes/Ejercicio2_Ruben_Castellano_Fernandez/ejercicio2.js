let comprobar1 = /^[a-zA-Z0-9]{7}$/i;

var usuario
var correcto = true;

while(correcto==true){
    usuario = prompt("Introduzca un usuario\nque contenga 7 caracteres alfanumericos.");
    if (comprobar1.test(usuario.toLowerCase())==true){
        correcto=false;
    }
    else{
        alert ("Error en el formato vuelva a intentarlo");
    }
}

document.write(usuario)

var altura=380;
var anchura=630;
 
// calculamos la posicion x e y para centrar la ventana
var y=parseInt((window.screen.height/2)-(altura/2));
var x=parseInt((window.screen.width/2)-(anchura/2));


var nuevaVentana;

    nuevaVentana = window.open("","",'width='+anchura+',height='+altura+',top='+y+',left='+x+',toolbar=no,location=no,status=no,menubar=no,scrollbars=no,directories=no,resizable=no');
    nuevaVentana.document.write(usuario);
