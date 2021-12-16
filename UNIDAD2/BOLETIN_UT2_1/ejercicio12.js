var correcto = false;
var nota;
do {
    nota = parseFloat(prompt("Introduzca una nota entre 0 y 10"));

    if (nota >=0 && nota <=10){
        correcto = true;
    }
} while(correcto == false);

if (nota<5){
    document.write("SUSPENSO");
} else if(nota >= 5 && nota < 6){
    document.write("APROBADO");
} else if(nota >= 6 && nota < 7){
    document.write("BIEN");
} else if(nota >= 7 && nota < 9){
    document.write("NOTABLE");
} else {
    document.write("SOBRESALIENTE");
}