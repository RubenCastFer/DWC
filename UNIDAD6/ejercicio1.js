window.addEventListener("load",añadir)

function añadir(){
    var h1 = document.createElement('h1');
    var txt8 = document.createTextNode('texto');
    h1.appendChild(txt8);

    var title = document.createElement('title');
    var txt1 = document.createTextNode('texto');
    title.appendChild(txt1);

    var p1 = document.createElement('p');
    var txt2 = document.createTextNode('text');
    p1.appendChild(txt2);

    var a1 = document.createElement('a');
    var txt3 = document.createTextNode('text');
    a1.appendChild(txt3);
    p1.appendChild(a1);

    var txt4 = document.createTextNode('text');
    p1.appendChild(txt4);

    var txt5 = document.createTextNode('text');
    p1.appendChild(txt5);

    var a2 = document.createElement('a');
    var txt6 = document.createTextNode('text');
    a2.appendChild(txt6);
    p1.appendChild(a2);

    var txt7 = document.createTextNode('text');
    p1.appendChild(txt7);

    document.head.appendChild(title);
    document.body.appendChild(h1);
    document.body.appendChild(p1);

}