/*
Crea un programa que solicite un correo electrónico y compruebe mediante funciones:

Comprobar que el nombre de usuario contiene al menos tres letras. Si no es así, debe
aparecer un mensaje por pantalla indicando que el texto no cumple tener al menos tres
letras. Debe aparecer el mensaje: “El nombre no cumple tener al menos tres letras”.
*/

var correo = prompt("Introduce un correo electronico");

let comprobar = /[a-zA-Z]{3,}@{1}\w+[.]\w+/i;

if (comprobar.test(correo)==false){
    document.write("El nombre no cumple tener al menos tres letras");
} else {
    document.write(correo);
}