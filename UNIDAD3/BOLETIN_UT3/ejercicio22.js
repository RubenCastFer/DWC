//un tiempo expresado en milisegundos y sacamos las horas munutos y segundos
var tiempoActualMilis = Date.now();
alert(tiempoActualMilis);

var tiempoIntroducido = parseInt(prompt("Introduce una fecha en milisegundos(13 digitos)"));
tiempoIntroducido = new Date(tiempoIntroducido);
alert(tiempoIntroducido.getDate()+"/"+(tiempoIntroducido.getMonth()+1)+"/"+tiempoIntroducido.getFullYear()+" "+tiempoIntroducido.getHours()+":"+tiempoIntroducido.getMinutes()+":"+tiempoIntroducido.getSeconds());