var punto1 = new Punto(1,0);
var punto2 = new Punto(4,2);

var rectangulo = new Rectangulo(punto1,punto2);

document.write("el perimetro del rectangulo es "+ rectangulo.perimetro() + " y su area es de "+ rectangulo.area());