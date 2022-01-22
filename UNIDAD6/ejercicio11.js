window.addEventListener("load",iniciar)

function iniciar(){

    
    var enlace= document.createElement("a");
    enlace.setAttribute("href","#");

    document.body.appendChild(enlace);
    
    var text=document.createTextNode("Pulsa para ver el div. Depende de donde pulses sobre el enlace, se mostrara la capa");
    enlace.appendChild(text);

    var div1 = document.createElement("div");
    document.body.appendChild(div1);
    
    var parr= document.createElement("p");
    parr.setAttribute("id","posicion");
    div1.appendChild(parr);
    
    var texto=document.createTextNode("");
    parr.appendChild(texto);

    document.getElementsByTagName("a")[0].addEventListener("click",oculto);
}

function oculto(e)
{

    var tempX = e.clientX;
    var tempY = e.clientY;

    
    var posicion = document.getElementById('posicion');
    posicion.firstChild.remove();
    var texto = document.createTextNode("PosX = "+tempX+" | PosY = "+tempY);
    posicion.appendChild(texto);
}