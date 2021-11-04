var menu = parseInt(prompt("Seleccione una opcion: \n1. Redondeo a su inmediato superior de un número \n2. Redondeo a su inmediato inferior de un número \n3. Redondeo al número más cercano \n4. Cálculo del número máximo entre dos dados \n5. Cálculo del número mínimo entre dos dados \n6. Cálculo de un número elevado a otro \n7. Cálculo de la raíz cuadrada de un número"));
switch (menu){
    case 1: 
        var numero = parseFloat(prompt("Introduce un numero con decimales"));
        alert(Math.ceil(numero));
        break;
    case 2: 
        var numero = parseFloat(prompt("Introduce un numero con decimales"));
        alert(Math.floor(numero));
        break;
    case 3: 
        var numero = parseFloat(prompt("Introduce un numero con decimales"));
        alert(Math.round(numero));
        break;
    case 4:
        var numero1 = parseFloat(prompt("Introduce un numero con decimales"));
        var numero2 = parseFloat(prompt("Introduce un numero con decimales"));
        alert(Math.max(numero1, numero2));
        break;
    case 5:
        var numero1 = parseFloat(prompt("Introduce un numero con decimales"));
        var numero2 = parseFloat(prompt("Introduce un numero con decimales"));
        alert(Math.min(numero1, numero2));
        break;
    case 6:
        var numero1 = parseFloat(prompt("Introduce un numero con decimales"));
        var numero2 = parseFloat(prompt("Introduce un numero con decimales"));
        alert(Math.pow(numero1, numero2));
        break;
    case 7:
        var numero = parseFloat(prompt("Introduce un numero con decimales"));
        alert(Math.sqrt(numero));
        break;

}