window.addEventListener("load",iniciar)

function iniciar() { 
    // const respuesta1 = document.getElementById('coche');
    // respuesta1.addEventListener('click', respuesta);
    // const respuesta2 = document.getElementById('perro');
    // respuesta2.addEventListener('click', respuesta);
    // const respuesta3 = document.getElementById('moto');
    // respuesta3.addEventListener('click', respuesta);
    // const respuesta4 = document.getElementById('avion');
    // respuesta4.addEventListener('click', respuesta);

    // const respuesta5 = document.getElementById('coche2');
    // respuesta5.addEventListener('click', respuesta);
    // const respuesta6 = document.getElementById('perro2');
    // respuesta6.addEventListener('click', respuesta);
    // const respuesta7 = document.getElementById('moto2');
    // respuesta7.addEventListener('click', respuesta);
    // const respuesta8 = document.getElementById('avion2');
    // respuesta8.addEventListener('click', respuesta);

    var elementos=document.forms[0];
    for (let i = 0; i < elementos.elements.length; i++) {
        elementos.elements[i].addEventListener('click',respuesta,false);
        
    }
    
}

var respuesta=(e)=>{
    if(e.currentTarget.name=="pregunta1"){
        divP1=document.getElementById("p1");
        var responde1= (document.forms["formulario"].pregunta1.value).toUpperCase();
        if (responde1=="PERRO") {
            document.forms["formulario"].respuesta1.value = "correcto";
            divP1.innerHTML="CORRECTO";
        }else{
            document.forms["formulario"].respuesta1.value = "falso";
            divP1.innerHTML="FALSO";

        }
    }

    if(e.currentTarget.name=="pregunta2"){
        var responde2= (document.forms["formulario"].pregunta2.value).toUpperCase();
        divP2=document.getElementById("p2");

        if (responde2=="MOTO") {
            document.forms["formulario"].respuesta2.value = "correcto";
            divP2.innerHTML="CORRECTO";
        }else{
            document.forms["formulario"].respuesta2.value = "falso";
            divP1.innerHTML="FALSO";

        }
    }

    
}