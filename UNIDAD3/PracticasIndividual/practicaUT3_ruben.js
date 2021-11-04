//ruben castellano
var cadenaFinal="";
let comprobar1 = /^@[a-z]{7}[0-9]{3}$/i;
let comprobar2 = /^[a-z]{7}[0-9]{3}$/i;

while(true){
    var usuario
    var correcto = true;
    var final=false;
    while(correcto==true){
        usuario = prompt("Introduzca un alias\nque inicie con @ y continue con 7 caracteres,\ncompuesto por la primera letra del nombre,\ntres primeras letras del primer apellido\ny tres primeras letras del segundo apellido\nademas finalizando con los 3 ultimos digitos del dni.\n\nIntroduzca 'fin' para finalizar el programa.");
        if (comprobar1.test(usuario.toLowerCase())==true){
            var separaciones=usuario.substring(0,2)+"_"+usuario.substring(2,8)+"_"+usuario.substring(8,11);
            cadenaFinal = cadenaFinal+separaciones+"</br>";
            correcto=false;
        } else if(comprobar2.test(usuario.toLowerCase())==true){
            var añadir="@"+usuario;
            var separaciones=añadir.substring(0,2)+"_"+añadir.substring(2,8)+"_"+añadir.substring(8,11);
            cadenaFinal = cadenaFinal+separaciones+"</br>";
            correcto=false;
        } else if(usuario.toLowerCase()=="fin"){
            final=true
            correcto=false;
        }
        else{
            alert ("Error en el formato vuelva a intentarlo");
        }
    }
    if (final==true){
        break;
    }

}

var altura=380;º
var anchura=630;
 
// calculamos la posicion x e y para centrar la ventana
var y=parseInt((window.screen.height/2)-(altura/2));
var x=parseInt((window.screen.width/2)-(anchura/2));


var nuevaVentana;
if(cadenaFinal!=""){
    nuevaVentana = window.open("","",'width='+anchura+',height='+altura+',top='+y+',left='+x+',toolbar=no,location=no,status=no,menubar=no,scrollbars=no,directories=no,resizable=no');
    nuevaVentana.document.write(cadenaFinal);
} else{
   document.write("No ha introducido ningún alias");
}
