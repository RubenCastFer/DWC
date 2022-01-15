window.addEventListener("load",enlace)

function enlace() {
    var div = document.createElement('div');

    document.body.appendChild(div);

    var enlace = document.createElement('a');
    enlace.setAttribute("href","ejercicio6.html");
    var txt = document.createTextNode("Esto es un link");

    enlace.appendChild(txt);
    div.appendChild(enlace);
    div.appendChild(document.createElement('br'))
    var txt = document.createTextNode(document.getElementsByTagName('a')[0].getAttribute("href"));
    document.getElementsByTagName('div')[0].appendChild(txt);
   
}
