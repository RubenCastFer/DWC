//bucle principal
while (true) {
    //preguntas
    var estatura = parseFloat(prompt("Introduce tu estatura en Metros: "));
    var peso = parseFloat(prompt("Introduce tu peso en Kilos: "));
    var edad = parseFloat(prompt("Introduce tu edad: "));  
    
    
    //en caso de error volver a preguntar
    while (estatura<=0) {
        estatura = parseFloat(prompt("Error: Introduce tu estatura en Metros: "));  
    }
    while (peso<=0) {
        peso = parseFloat(prompt("Error: Introduce tu peso en Kilos: "));  
    }
    while (edad<=0) {
        edad = parseFloat(prompt("Error: Introduce tu edad: "));  
    }

    //calculo del indice de masa
    var indiceDeMasa = peso/(Math.pow(estatura,2));

    //respuesta esperada
    if (edad < 45 && indiceDeMasa < 22){
        alert("El riesgo de enfermedad es bajo");
    }else if (edad < 45 && indiceDeMasa >= 22){
        alert("El riesgo de enfermedad es medio");
    }else if (edad >= 45 && indiceDeMasa < 22){
        alert("El riesgo de enfermedad es medio");
    }else if (edad < 45 && indiceDeMasa >= 22){
        alert("El riesgo de enfermedad es alto");
    }

    //pregunta control para el final
    var finalizar = prompt("¿Desea realizar una nueva consulta? (S/n)");
    if (finalizar.toUpperCase() == "S"){
        continue;
    } else{
        break;
    }
}