/*var number = prompt("introduce tu fecha de nacimiento con el siguiente formato: dd/mm/aaaa");
    //number = number.replace(/\//g, "0");
    //number=number.split(/\//g);
var dia=number.substr(0,2);
var mes=number.substr(3,2);
var año=number.substr(6,4);

console.log(dia);
console.log(mes);
console.log(año);

var nuevo = parseInt(dia) + parseInt(mes) + parseInt(año);
console.log(dia + " + "+ mes +" + "+ año +" = " + nuevo);  
output = [];
var sNuevo = nuevo.toString();


while ( sNuevo.length > 1 ){

    for (var i = 0, len = sNuevo.length; i < len; i += 1) {
        output.push(+sNuevo.charAt(i));
    }
    for (var i = 0, sum = 0; i < output.length; sum += output[i++]);
        console.log(sum);
        output = [];
        sNuevo=sum.toString();
        
}*/

año = parseInt(prompt("introduce el año del nacimiento"));
mes = parseInt(prompt("introduce el mes del nacimiento"));
dia = parseInt(prompt("introduce el dia del nacimiento"));

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