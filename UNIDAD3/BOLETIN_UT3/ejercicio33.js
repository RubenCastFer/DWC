
laHora();
var contar = setInterval(laHora, 1000);
var parar = setTimeout(pararLaHora, 5000);

function laHora(){
    var hora =new Date.now();
    var titulo =hora.getHours()+":"+hora.getMinutes()+":"+hora.getSeconds();
    document.title=titulo;
}
function pararLaHora() {
    clearInterval(contar);
  }



/*
var myVar = setInterval(myTimer, 1000);

function myTimer() {
  var d = new Date();
  var t = d.toLocaleTimeString();
  document.title=t
}

*/