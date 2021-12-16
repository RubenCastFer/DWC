var cambio = parseFloat(prompt("Introduzca una cantidad de dinero"));
var vuelta;

if (cambio>=2){
        
    vuelta=cambio/2;
    cambio=cambio%2;
    console.log(Math.trunc(vuelta)+" monedas de 2€ ");
} 


if (cambio>=1){
    
    vuelta=cambio/1;
    cambio=cambio%1;
    console.log(Math.trunc(vuelta)+" monedas de 1€ ");
} 

if (cambio>=0.5){
    
    vuelta=cambio/0.5;
    cambio=cambio%0.5;
    console.log(Math.trunc(vuelta)+" monedas de 50 centimos de euro");
}

if (cambio>=0.2){
    
    vuelta=cambio/0.2;
    cambio=cambio%0.2;
    console.log(Math.trunc(vuelta)+" monedas de 20 centimos de euro");
}

if (cambio>=0.1){
    
    vuelta=cambio/0.1;
    cambio=cambio%0.1;
    console.log(Math.trunc(vuelta)+" monedas de 10 centimos de euro");
}

if (cambio>=0.05){
    
    vuelta=cambio/0.05;
    cambio=cambio%0.05;
    console.log(Math.trunc(vuelta)+" monedas de 5 centimos de euro");
}

if (cambio>=0.02){
    
    vuelta=cambio/0.02;
    cambio=cambio%0.02;
    console.log(Math.trunc(vuelta)+" monedas de 2 centimos de euro");
}

if (cambio>=0.01){
    
    vuelta=cambio/0.01;
    cambio=cambio%0.01;
    console.log(Math.trunc(vuelta)+" monedas de 1 centimos de euro");
}
