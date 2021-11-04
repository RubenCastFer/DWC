var año = parseInt(prompt("Introduzca un año"));

if ( año % 400==0 || año % 4==0 && año%100 != 0 ){
    document.write("El año introducido es bisiesto");
} else  {
    document.write("El año introducido no es bisiesto")
}
