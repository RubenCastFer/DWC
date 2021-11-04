var hora = prompt("Introduzca la hora con el siguiente formato:", "HH:mm");
console.log(hora);
hora = hora.replace(/:/, '.');
console.log(hora);
//isNaN(hora)

if(hora >=0 && hora <= 24){
    if (hora >= 7.30 && hora <= 14.00){
        console.log(hora);
        document.write("Buenos dias");
    } else if (hora >= 14.01 && hora <= 20.30){
        console.log(hora);
        document.write("Buenas tardes");
    } else {
        console.log(hora);
        document.write("Buenas noches");
    }
} else {
    console.log(hora);
    document.write("Hora no valida");
}

