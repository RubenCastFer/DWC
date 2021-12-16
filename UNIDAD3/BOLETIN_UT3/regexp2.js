/*
Crea un programa que solicite un correo electrónico y compruebe mediante funciones:

Comprobar que el correo electrónico contiene el carácter @ (arroba) y el carácter .
(punto). De no ser así, deberá aparecer un mensaje indicando que al correo electrónico
le falta uno o ambos caracteres. Por ejemplo si el correo es pacogmail.com deberá
aparecer el mensaje: “Falta el símbolo @ en el correo electrónico”.
*/

var correo = prompt("Introduce un correo electronico");

let comprobar = /@{1}\w+\.{1}\w{2,3}$/i;

if (comprobar.test(correo)==false){
    document.write("El nombre no cumple el tener '@' u '.'");
} else {
    document.write(correo);
}