window.addEventListener("load",desplegableTitulo);


function cuerpo(){
    arrayJuguetes = [	{	img:"https://juguettos.com/1361787-large_default/A0041951.jpg", 
                        precio:"14,99",
			            href:"https://juguettos.com/1039-la-banda", 
                        ref:"A0041951",
			            title:"La Banda Tambor Acústico", 
                        coleccion:"La Banda"
		},
		{	img:"https://juguettos.com/1362350-large_default/A0133071.jpg", 
            precio:"21,99",
			href:"https://juguettos.com/1039-la-banda", 
            ref:"A0051216",
			title:"La Banda Guitarra Española", 
            coleccion:"La Banda"
		}
    ];
    
    var div=document.createElement("div");
    document.body.appendChild(div);

    var ul1=document.createElement('ul');
    ul1.setAttribute('style','list-style-type: none')
    div.appendChild(ul1);

    for (let i=0; i<arrayJuguetes.length;i++){
        var li = document.createElement("li");
        ul1.appendChild(li);
        
        var img = document.createElement("img");
        img.setAttribute('src',arrayJuguetes[i]['img']);
        img.setAttribute("title",arrayJuguetes[i]['title'])
        li.appendChild(img);
        
        var div2=document.createElement('div');
        div2.setAttribute("class","desc");
        div2.setAttribute("style","display:none");
        li.appendChild(div2);

        var div3 = document.createElement("div");
        div3.setAttribute("class", "content_price");
        var precio=document.createTextNode(arrayJuguetes[i]['precio']);
        div3.appendChild(precio);
        div2.appendChild(div3);

        var enlace= document.createElement('a');
        enlace.setAttribute("href",arrayJuguetes[i]["href"]);
        var nomEnlace=document.createTextNode(arrayJuguetes[i]["coleccion"]);
        enlace.appendChild(nomEnlace);
        div2.appendChild(enlace);

        var parrafo = document.createElement("p");
        parrafo.setAttribute("class","product-desc");
        var textParr= document.createTextNode(arrayJuguetes[i]["ref"]);
        parrafo.appendChild(textParr);
        div2.appendChild(parrafo);
    }

}

function desplegableTitulo(){
    var titulo = document.getElementsByTagName('h1');


    for (let i = 0; i<titulo.length; i++){
        titulo[i].addEventListener('click', ocultarMostrarTitulo);
    }


    
}
function desplegable(){


    var fotos = document.getElementsByTagName('img');

    for (let z = 0; z<fotos.length; z++){
        fotos[z].addEventListener('click', ocultarMostrar);
    }
    
}

function ocultarMostrar(){
    
    if (this.nextSibling.style.display=="none") {
        visible="";
    } else{
        visible="none";
    }

    var padre = this.parentNode;
    var arrayHijos = padre.childNodes;
    for(let z= 1; z<arrayHijos.length; z++){
        arrayHijos[z].style.display=visible;
    }
}
function ocultarMostrarTitulo(){
    var ocultar=document.getElementsByTagName('div');
    var titulo = document.getElementsByTagName('h1')[0];
    if (ocultar[0]==undefined) {
        titulo.firstChild.nodeValue="Ocultar";
        cuerpo();
        desplegable();
    }else{
        titulo.firstChild.nodeValue="Mostrar";
        ocultar[0].remove();
    }
}

