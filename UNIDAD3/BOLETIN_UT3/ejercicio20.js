var año = parseInt(prompt("introduce el año del nacimiento"));
var mes = parseInt(prompt("introduce el mes del nacimiento"));
var dia = parseInt(prompt("introduce el dia del nacimiento"));
//restar al mes -1 pues el mes de Date va desde 0 a 11
fechaNacimiento = new Date(año, mes-1, dia).getTime();
fechaActual = Date.now();

if (fechaNacimiento<fechaActual){
    alert("La fecha es posible")
    sumaFecha =  año+mes+dia;
    sum=0;
    
    do{
        if(sumaFecha==0){
            sumaFecha=sum;
            sum;
        }
    
        sum+=sumaFecha%10;
        sumaFecha=parseInt(sumaFecha/10)
    }while (sumaFecha>=1 || sum >9);
    alert(sum);
} else{
    alert ("La fecha no es posible");
}
