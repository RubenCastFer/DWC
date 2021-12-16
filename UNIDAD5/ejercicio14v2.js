window.addEventListener("load",iniciar)

function iniciar() { 
    const respuesta1 = document.getElementById('nHabitacion');
    respuesta1.addEventListener('blur', existenombre);

    const respuesta2 = document.getElementById('boton');
    respuesta2.addEventListener('click', procesar);
}

function procesar(){
    //recoger datos
    var usuario = document.getElementById("nombre").value;
    var nHabitacion = document.getElementById("nHabitacion").value;
    var cafe = document.forms["formulario"].cafe.value;

    //enviar cookie
    // document.cookie = "usuario="+usuario;
    // document.cookie = "nHabitacion="+nHabitacion;
    // document.cookie = "cafe="+cafe;
    //document.cookie = usuario+nHabitacion+"="+cafe;
    localStorage.setItem(usuario+nHabitacion, cafe);
    //referesca la pagina
    location.reload();
}

function existenombre(){
    //recojo el usuario y su habitacion
    var usuario = document.getElementById("nombre").value;
    var nHabitacion = document.getElementById("nHabitacion").value;

    //miro si esta la cookie con la clave usuario+habitacion
    if (localStorage.getItem(usuario+nHabitacion)) {
        
        //si esta guardo el valor de la clave
        const cafe = localStorage.getItem(usuario+nHabitacion)
        
        //marca el cafe 
        document.getElementById(cafe).checked = true;
        
        //envia la alerta de una oferta
        alert(usuario+" tienes una oferta en su cafe favorito "+cafe);
        
        // const output = document.getElementById('cookie-value')
        // output.textContent = cafe;
    }
      
}