$(function () {
    // $("#boton").click(function() {
    $.ajax({

        url: 'ejercicio13.php',
        type: 'post',
        success: function (result) {
            var json = JSON.parse(result)
            $("body").html("<div id='todos-los-viajes'> <h1>Subtituloo</h1> </div>");
            var ul = $("<ul>");
            $("body").append(ul);
            for (let i = 0; i < json.length; i++) {
                var li = $("<li>");
                var img = $("<img>", { "src": json[i].src, "width": "100px" })
                ul.append(li);
                li.append(img);

                var parr = $("<p>",{"style": "display: none"});
                parr.text(json[i].desc);
                li.append(parr);

                var ul2 = $("<ul>", { "class": "specs" });
                li.append(ul2);

                for (let z = 0; z < json[i].specs.length; z++) {
                    var li2 = $("<li>");
                    ul2.append(li2);

                    li2.text(json[i].specs[z]);

                }
            }
            $("ul:first > li").addClass("viaje");

            $("img").hover(function(){
                    $(this).siblings("p").slideDown("slow").delay(5000);},
                function(){
                    $(this).siblings("p").slideUp("slow");
              });
        }

        
    });
    // });
    

});