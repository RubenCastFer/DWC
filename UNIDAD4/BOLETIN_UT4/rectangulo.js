class Rectangulo{
    constructor(punto1,punto2){
        this.punto1=punto1;
        this.punto2=punto2;
        this.u = Math.abs(punto2.x-punto1.x);
        this.v = Math.abs(punto2.y-punto1.y);
    };

    perimetro(){
        return 2*this.u+2*this.v
    };

    area(){
        return this.u*this.v
    };
    

}