// type="square"
window.addEventListener("load",añadir)

function añadir(){
    
    document.getElementsByTagName('li')[0].parentNode.setAttribute("type","square");
    var list1 = document.createElement('li');
    var txt1 = document.createTextNode('Audi A1');
    list1.appendChild(txt1);
    document.getElementsByTagName('li')[0].parentNode.insertBefore(list1,document.getElementsByTagName('li')[0]);


    var list2 = document.createElement('li');
    var txt2 = document.createTextNode('Audi A2');
    list2.appendChild(txt2);
    document.getElementsByTagName('li')[2].parentNode.insertBefore(list2,document.getElementsByTagName('li')[3]);


    var list3 = document.createElement('li');
    var txt3 = document.createTextNode('Audi A6');
    list3.appendChild(txt3);
    document.getElementsByTagName('li')[0].parentNode.appendChild(list3);
}