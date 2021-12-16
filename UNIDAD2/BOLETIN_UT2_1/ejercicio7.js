var precio = parseFloat(prompt("Introduzca el precio"));
var dineroEntregado = parseFloat(prompt("Introduzca la cantidad pagada"));
var cambio;
var vuelta;


if (dineroEntregado < precio){
    console.log("Dinero insuficiente");
    document.write("Dinero insuficiente");
} else {
    cambio = dineroEntregado-precio;
    
    if (cambio>=500){
        vuelta=cambio/500;
        cambio=cambio%500;
        console.log(Math.trunc(vuelta)+" billetes de 500€ ");
    } 
    if (cambio>=200){
        
        vuelta=cambio/200;
        cambio=cambio%200;
        console.log(Math.trunc(vuelta)+" billetes de 200€ ");
    } 

    if (cambio>=100){
        
        vuelta=cambio/100;
        cambio=cambio%100;
        console.log(Math.trunc(vuelta)+" billetes de 100€ ");
    } 

    if (cambio>=50){
        
        vuelta=cambio/50;
        cambio=cambio%50;
        console.log(Math.trunc(vuelta)+" billetes de 50€ ");
    } 
    
    if (cambio>=20){
        
        vuelta=cambio/20;
        cambio=cambio%20;
        console.log(Math.trunc(vuelta)+" billetes de 20€ ");
    } 
    
    if (cambio>=10){
        
        vuelta=cambio/10;
        cambio=cambio%10;
        console.log(Math.trunc(vuelta)+" billetes de 10€ ");
    } 

    if (cambio>=5){
        
        vuelta=cambio/5;
        cambio=cambio%5;
        console.log(Math.trunc(vuelta)+" billetes de 5€ ");
    } 
    
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
}