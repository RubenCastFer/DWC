window.addEventListener("load",get_fortune)

function get_fortune() {
    var hoy = new Date(); dichos= new Array(
    "Carpe Diem.",
    "El silencio es oro, pero la cinta aislante es plata.", "Una manzana al día, mantiene al doctor en la lejanía.", "A cada uno lo suyo.",
    "Si a la primera no lo consigues, inténtalo de nuevo.", "No te conformes con la mediocridad, pelea por el éxito", "Vive y deja vivir."
    );
    var n=dichos.length;
    numero = Math.floor(Math.random()*n);
    // dicho = "Hoy es: "+hoy+ ".<br /><br />Hoy la suerte te dice:<br /><br /><em>" +dichos[numero] +"</em>"; 
    // document.getElementById('divdicho').innerHTML = dicho;
    

    var raiz=document.getElementById('divdicho');
    var txt1 = document.createTextNode('Hoy es: ');
    raiz.appendChild(txt1);

    var txt2 = document.createTextNode(hoy);
    raiz.appendChild(txt2);

    var saltolinea1 = document.createElement('br');
    raiz.appendChild(saltolinea1);

    var saltolinea2 = document.createElement('br');
    raiz.appendChild(saltolinea2);
    
    var txt3 = document.createTextNode('Hoy la suerte te dice:');
    raiz.appendChild(txt3);

    var saltolinea3 = document.createElement('br');
    raiz.appendChild(saltolinea3);

    var saltolinea4 = document.createElement('br');
    raiz.appendChild(saltolinea4);

    var enfasis = document.createElement('em');
    var txt4 = document.createTextNode(dichos[numero]);
    enfasis.appendChild(txt4);

    raiz.appendChild(enfasis);
}
    