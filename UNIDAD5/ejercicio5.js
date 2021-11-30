window.addEventListener("load",iniciar);

function iniciar(){
    var mensaje = document.getElementById("mensaje");
    mensaje.addEventListener("keyup",countChars,false);
}

function countChars(e){
    var maxLength = 145;
    var longitudCadena = e.currentTarget.value.length;
    var restante = (maxLength - longitudCadena);

    if(restante < 0){
        document.getElementById("numCaracteres").innerHTML = '<span style="color: red;">Has pasado el limite , es '+maxLength+' caracteres</span>';
    }else{
        document.getElementById("numCaracteres").innerHTML = restante+' caracteres restantes';
    }
}
