// type="square"
window.addEventListener("load",añadir)

function añadir(){
    
    document.getElementsByTagName('li')[0].parentNode.setAttribute("type","square");

    var para = document.createElement('li');
    var txt1 = document.createTextNode('Audi A6');
    para.appendChild(txt1);
    document.getElementsByTagName('li')[0].parentNode.appendChild(para);
}