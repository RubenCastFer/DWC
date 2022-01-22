window.addEventListener('load', iniciar);

function iniciar() {

    var container = document.getElementById('container');
    var img = document.createElement('img');
    img.setAttribute("src", "#");
    container.appendChild(img);
    

    container.addEventListener('mousemove', function(e) {

        x = e.clientX;
        y = e.clientY;

        img.style.left = x + "px";
        img.style.top = y + "px";

    });

}