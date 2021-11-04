var numero = parseInt(prompt("Introduce un número"));

if (numero != 0)
{
    numero = 1/numero;
    document.write("El inverso del numero introducido es " + numero);
} else 
{
    document.write("El numero 0, no tiene inverso");
}
