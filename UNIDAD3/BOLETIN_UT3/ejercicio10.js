var numeroTelefono = prompt("Introduce tu numero de telefono: ");

var prefijo = parseInt(numeroTelefono.slice(0,3));
//document.write(prefijo);
switch (prefijo) {
    case 950:
    case 850:
        document.write("El prefijo "+ prefijo+" del número introducido " + numeroTelefono + ", es de Almería.");
        break;
    case 956:
    case 856:
        document.write("El prefijo "+ prefijo+" del número introducido " + numeroTelefono + ", es de Cádiz.");
        break;
    case 957:
    case 857:
        document.write("El prefijo "+ prefijo+" del número introducido " + numeroTelefono + ", es de Córdoba.");
        break;
    case 958:
    case 858:
        document.write("El prefijo "+ prefijo+" del número introducido " + numeroTelefono + ", es de Granada.");
        break;
    case 959:
    case 859:
        document.write("El prefijo "+ prefijo+" del número introducido " + numeroTelefono + ", es de Huelva.");
        break;
    case 953:
    case 853:
        document.write("El prefijo "+ prefijo+" del número introducido " + numeroTelefono + ", es de Jaén.");
        break;
    case 951:
    case 952:
    case 851:
        document.write("El prefijo "+ prefijo+" del número introducido " + numeroTelefono + ", es de Málaga.");
        break;
    case 954: 
    case 955:
    case 854:
        document.write("El prefijo "+ prefijo+" del número introducido " + numeroTelefono + ", es de Sevilla.");
        break;
    default:
        document.write("Prefijo desconocido");
        break;
}