window.addEventListener("load",iniciar)

function iniciar() { 
    const respuesta1 = document.getElementById('imagen');
    respuesta1.addEventListener('click', comprobar);
}

var comprobar = () => {
    divN1=document.getElementById("n1");
    var nombre= (document.getElementById("nombreMa").value);
    var nombreMayu=(document.getElementById("nombreMa").value).toUpperCase();
    if (nombre=="") {
        divN1.innerHTML="CAMPO OBLIGATORIO";
    }else if (nombre==nombreMayu) {
        divN1.innerHTML="CORRECTO";
        document.getElementById("formulario").action = "mailto: ruben@gmail.com";
        document.getElementById("formulario").submit();
    } else {
        divN1.innerHTML="ESCRIBA SU NOMBRE EN MAYUSCULA";
    }
}