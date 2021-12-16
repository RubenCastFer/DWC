/*
Crea un programa que solicite un correo electrónico y compruebe mediante funciones:

Antes de enviarse los datos del formulario a la página de destino, si el correo
electrónico contiene la subcadena “ at “ debe reemplazarse por el símbolo @. Por
ejemplo si se ha escrito paco at gmail.com debe cambiarse a paco@gmail.com
*/

var correo = prompt("Introduce un correo electronico");
var correo1 = correo.replace(" at ", "@");
document.write(correo+"</br>");
document.write(correo1);

