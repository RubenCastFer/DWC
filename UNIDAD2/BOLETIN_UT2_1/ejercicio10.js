var terminar = false
var vuelta;

while (terminar == false){
    var euros = parseInt(prompt("Introduce la cantidad de euros que desea cambiar: "));
    var cambio = parseInt(prompt("A que moneda desea realizar el cambio: \nMenu: \n1. Dólares\n2. Libras\n3. Yenes\n4. Franco Suizo\n5. Corona Noruega\n0. Salir "));

    console.log("Menu: ");
    console.log("1. Dólares");
    console.log("2. Libras");
    console.log("3. Yenes");
    console.log("4. Franco Suizo");
    console.log("5. Corona Noruega");
    console.log("0. Salir ");

    switch (cambio){
        case 1:
            vuelta=euros*1.16;
            console.log("El cambio a dolar de " + euros + "€ es de " + vuelta.toFixed(2));
            break;
        case 2:
            vuelta=euros*0.86;
            console.log("El cambio a libra de " + euros + "€ es de " + vuelta.toFixed(2));
            break;
        case 3:
            vuelta=euros*129.84;
            console.log("El cambio a yen de " + euros + "€ es de " + vuelta.toFixed(2));
            break;
        case 4:
            vuelta=euros*1.08;
            console.log("El cambio a franco suizo de " + euros + "€ es de " + vuelta.toFixed(2));
            break;
    
        case 5:
            vuelta=euros*9.94;
            console.log("El cambio a corona noruega de " + euros + "€ es de " + vuelta.toFixed(2));
            break;
        case 0:
            terminar=true;
            break;   
        default: 
            console.log("Valor introducido incorrecto."); break;

    }   
}