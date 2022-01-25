//Ruben Castellano Fernandez

window.addEventListener("load",inicio);

function inicio(){
    cuerpo();
    var titulo = document.getElementsByClassName('titulo');

    for (let z = 0; z<titulo.length; z++){
        titulo[z].addEventListener('click', mostrarOcultar);
    }
}

function cuerpo(){
    var json = [
        {titulo: "Beaking Bad",genero: "Drama",sinopsis: "Altamente aclamado por la crítica, este drama televisivo escrito y producido por Vince Gilligan ('Expediente X') nos muestra la vida de Walter White (Bryan Cranston 'Malcolm'), un genio en el campo ...",src:"https://es.web.img3.acsta.net/c_310_420/pictures/18/04/04/22/52/3191575.jpg"},
        {titulo: "Juego de Tronos",genero: "Fantasía",sinopsis: "HBO, desde la calidad que caracteriza a la cadena, nos brinda una vez más una magistral adaptación televisiva de la serie de novelas 'Canción de hielo y fuego' del escritor estadounidense George R. ...",src:"https://es.web.img2.acsta.net/c_310_420/pictures/19/03/22/10/08/5883111.jpg?coixp=50&coiyp=40"},
        {titulo: "Peaky Blinders",genero: "Crimen,Drama",sinopsis: "Peaky Blinders es un drama de BBC que narra la historia de la familia gitana Shelby y su banda de gángsters, un grupo de personas características por sus boinas con cuchillas y dueñas de los ...",src:"https://es.web.img2.acsta.net/c_310_420/pictures/15/10/23/08/59/222051.jpg?coixp=45&coiyp=64"}];[
        {titulo: "Beaking Bad",genero: "Drama",sinopsis: "Altamente aclamado por la crítica, este drama televisivo escrito y producido por Vince Gilligan ('Expediente X') nos muestra la vida de Walter White (Bryan Cranston 'Malcolm'), un genio en el campo ...",src:"https://es.web.img3.acsta.net/c_310_420/pictures/18/04/04/22/52/3191575.jpg"},
        {titulo: "Juego de Tronos",genero: "Fantasía",sinopsis: "HBO, desde la calidad que caracteriza a la cadena, nos brinda una vez más una magistral adaptación televisiva de la serie de novelas 'Canción de hielo y fuego' del escritor estadounidense George R. ...",src:"https://es.web.img2.acsta.net/c_310_420/pictures/19/03/22/10/08/5883111.jpg?coixp=50&coiyp=40"},
        {titulo: "Peaky Blinders",genero: "Crimen,Drama",sinopsis: "Peaky Blinders es un drama de BBC que narra la historia de la familia gitana Shelby y su banda de gángsters, un grupo de personas características por sus boinas con cuchillas y dueñas de los ...",src:"https://es.web.img2.acsta.net/c_310_420/pictures/15/10/23/08/59/222051.jpg?coixp=45&coiyp=64"}
    ];

    var div1 = document.createElement("div");
    // var h1 = document.getElementsByTagName("h1")[0];
    document.body.appendChild(div1);
    
    var ul = document.createElement("ul");
    ul.setAttribute("style","list-style-type: none");
    div1.appendChild(ul);

    for(let i = 0; i<json.length; i++){
        var li1 = document.createElement("li");
        ul.appendChild(li1);

        var div2 = document.createElement("div");
        li1.appendChild(div2);
        div2.setAttribute("class","left-block");

        var p1 = document.createElement("p");
        p1.setAttribute("class","titulo");
        div2.appendChild(p1);
        p1.appendChild(document.createTextNode(json[i]["titulo"]))

        var div3 = document.createElement("div");
        div3.setAttribute("class","desc");
        div3.setAttribute("style","display: none");
        div2.appendChild(div3);

        var div4 = document.createElement("div");
        div4.setAttribute("class","content_genre")
        div3.appendChild(div4);

        var b1= document.createElement("b");
        b1.appendChild(document.createTextNode("Género:"))
        div4.appendChild(b1);
        div4.appendChild(document.createTextNode(json[i]["genero"]));

        var p2 = document.createElement("p");
        div3.appendChild(p2);
        p2.setAttribute("class", "product-desc");

        var b2= document.createElement("b");
        b2.appendChild(document.createTextNode("Sinopsis:"));
        
        p2.appendChild(b2);
        p2.appendChild(document.createTextNode(json[i]["sinopsis"]));

        var img1=document.createElement("img");
        img1.setAttribute("src",json[i]["src"])
        div3.appendChild(img1)

    }

}

function mostrarOcultar(){
    if (this.nextSibling.style.display=="none") {
        visible="block";
    } else{
        visible="none";
    }

    var padre = this.parentNode;
    var arrayHijos = padre.childNodes;
    for(let z= 1; z<arrayHijos.length; z++){
        arrayHijos[z].style.display=visible;
    }
}