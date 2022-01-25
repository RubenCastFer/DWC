window.addEventListener("load",iniciar)

function iniciar() { 
    const formulario = document.getElementById('button');
    formulario.addEventListener('click', copiarDatos);

    const formulario2 = document.getElementById('date');
    formulario2.addEventListener('blur', mostrarEdad);


    const formulario3 = document.getElementById('passConf');
    formulario3.addEventListener('blur', confirmarContrasenya);

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

    confirmarContrasenya()
}

function mostrarEdad(){
    var años=calcularEdad(document.getElementById('date').value);
    var edad=document.getElementById("edad");
    var cuadroEdad=document.getElementById("edad");
    cuadroEdad.value=años;
    var error=document.getElementById("error");


    if (años<18) {
        var textError=document.createTextNode("No puede ser menor de 18 años");
        error.appendChild(textError);

    }else{
        if (error.nodeValue==null) {
            error.firstChild.remove();
            mostrarSelect();
        }else{
            error.firstChild.remove();
            mostrarSelect();
            
        }
    }
}

function mostrarSelect(){
    var label=document.createElement("label");
    label.setAttribute("for","modulos");
    label.appendChild(document.createElement("br"));
    label.appendChild(document.createTextNode("Modulos"));
    label.appendChild(document.createElement("br"));
    document.getElementById("error").parentElement.insertBefore(label,document.getElementById("error"));

    var select = document.createElement("select");
    select.setAttribute("name","modulos");
    select.setAttribute("id","modulos");
    document.getElementById("error").parentElement.insertBefore(select,label.nextSibling);

    var array=["smr","daw","asi"];
    array.forEach(element => {
        var option = document.createElement("option");
        option.setAttribute("value",element);
        option.appendChild(document.createTextNode(element));
        select.appendChild(option);
    });
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

function checkPasswordVal(password, passwordConfirm) {
    var validator = false;
    if (password == passwordConfirm) {
        validator = true;
    }
    return validator;
}

function confirmarContrasenya() {
    var password = document.forms["registro"].pass.value;
    var passwordConfirm = document.forms["registro"].passConf.value;
    var validator = false;
    document.getElementById("registro").action = "mailto:" + document.forms["registro"].email.value; 
    if (password == passwordConfirm) {
        document.getElementById("errorPassword").innerHTML = "<p style='color:green'>Las contraseñas coinciden.</p>";
        validator = true;
    } else {
        document.getElementById("errorPassword").innerHTML = "<p style='color:red'>Las contraseñas no coinciden.</p>";
    }
    return validator;
}
