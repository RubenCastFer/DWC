window.addEventListener("load",añadir)

function añadir(){
    
    var para = document.createElement('p');
    var txt1 = document.createTextNode('Este es el ');
    para.appendChild(txt1);

    var enfasis = document.createElement('em');
    var txt2 = document.createTextNode('contenido');
    enfasis.appendChild(txt2);

    para.appendChild(enfasis);
    
    var txt3 = document.createTextNode(' de mi párrafo');
    para.appendChild(txt3);

    document.getElementById('testdiv').appendChild(para);
}
