window.addEventListener("load",iniciar)

function iniciar() { 
    const formulario = document.getElementById('button');
    formulario.addEventListener('click', copiarDatos);

    const formulario2 = document.getElementById('date');
    formulario2.addEventListener('blur', mostrarEdad);

}

function copiarDatos() {

    var name = (document.forms["registro"].name.value).toUpperCase();
    var lastname = (document.forms["registro"].lastname.value).toUpperCase();
    var username = (document.forms["registro"].username.value).toUpperCase();
    var date = (document.forms["registro"].date.value).toUpperCase();
    var sex = (document.forms["registro"].sex.value).toUpperCase();
    var telefono = (document.forms["registro"].telefono.value).toUpperCase();
    var email = (document.forms["registro"].email.value).toUpperCase();
    var password = document.forms["registro"].pass.value;
    var passwordConfirm = document.forms["registro"].passConf.value;
    
    // document.write(name + "<br>");
    // document.write(lastname + "<br>");
    // document.write(username + "<br>");
    // document.write(date + "<br>");
    // document.write(sex + "<br>");
    // document.write(telefono + "<br>");
    // document.write(email + "<br>");

    var nuevaVentana;
    nuevaVentana = window.open("","","height=400,width=800");
    nuevaVentana.document.write("<br>")
    nuevaVentana.document.write(name + "<br>");
    nuevaVentana.document.write(lastname + "<br>");
    nuevaVentana.document.write(username + "<br>");
    nuevaVentana.document.write(date + "<br>");
    nuevaVentana.document.write(sex + "<br>");
    nuevaVentana.document.write(telefono + "<br>");
    nuevaVentana.document.write(email + "<br>");
}

function mostrarEdad(){
    var años=calcularEdad(document.getElementById('date').value);
    var edad=document.getElementById("edad");


    if (años<18) {
        var parra=document.createElement("p");
        parra.setAttribute("id","edadAños");
        var text=document.createTextNode(años);
        parra.appendChild(text);
        edad.appendChild(parra);

        var errorDiv=document.createElement("div");
        errorDiv.setAttribute("id","error");
        var textError=document.createTextNode("No puede ser menor de 18 años");
        edad.appendChild(errorDiv);
        errorDiv.appendChild(textError);

    }else{
        edad.removeChild(document.getElementById("error"));
        edad.removeChild(document.getElementById("edadAños"));

        var parra=document.createElement("p");
        parra.setAttribute("id","edadAños");

        var text=document.createTextNode(años);
        parra.appendChild(text);
        edad.appendChild(parra);

    }
}



function calcularEdad(fecha) {
    var hoy = new Date();
    var cumpleanos = new Date(fecha);
    var edad = hoy.getFullYear() - cumpleanos.getFullYear();
    var m = hoy.getMonth() - cumpleanos.getMonth();

    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }

    return edad;
}
