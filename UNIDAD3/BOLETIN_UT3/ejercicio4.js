
for (var i=0; i<15;i++){
    
    var numero = Math.floor(Math.random()*10);
    if(numero>=0 && numero<5){
        document.write("-1-");
    } else if(numero>=5 && numero<8){
        document.write("-x-");
    } else {
        document.write("-2-");
    }
    document.write(" <br>");
}
    