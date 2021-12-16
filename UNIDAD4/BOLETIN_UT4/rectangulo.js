class Rectangulo{
    constructor(punto1,punto2){
        this.punto1=punto1;
        this.punto2=punto2;
        
    };
    altura(){
        var v = Math.abs(punto2.y-punto1.y);
        return v;
    };

    base(){
        var u = Math.abs(punto2.x-punto1.x);
        return u;
    };
    perimetro(){
        var u=this.base();
        var v=this.altura();
        return 2*u+2*v;
    };

    area(){
        var u=this.base();
        var v=this.altura();
        return u*v;
    };
    




}