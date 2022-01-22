window.addEventListener("load",iniciar)

function iniciar(){
    var div1 = document.createElement("div");
    document.body.appendChild(div1);
    
    var parr= document.createElement("p");
    parr.setAttribute("id","datos");
    div1.appendChild(parr);
    
    var text=document.createTextNode("");
    parr.appendChild(text);
    document.addEventListener("mousemove",posicion)
}

function posicion(e){

    var datos = document.getElementById("datos");
    datos.firstChild.nodeValue="x"+e.clientX+" y"+e.clientY;
    console.log(e.clientX);
    console.log(e.clientY);
}