class Listado{
    constructor(bandas){
        this.bandas=bandas;
    };

    imprimirListadoBandas(){
        bandas.forEach(banda => {
            banda.mostrarBanda();
            document.write("<br>")
        });
    };

    buscarBandaPorNombre(nombre){
        return this.bandas.filter((banda)=> banda.nombre.toUpperCase()==nombre.toUpperCase());

    };

    buscarBandaPorEstilo(estilo){
        return this.bandas.filter((banda)=> banda.estilo.toUpperCase()==estilo.toUpperCase());

    };

    ordenarBandasPorAño(){
        return this.bandas.sort((banda1,banda2)=>{
            if (banda1.fecha<banda2.fecha){
                return 1;
        } else if (banda1.fecha>banda2.fecha){
                return -1;
        }
        return 0;
        });
    };

    eliminarBanda(nombre){
        var index = this.bandas.findIndex((banda)=> banda.nombre.toUpperCase()==nombre.toUpperCase());
        if (index!=-1) {
            this.bandas.splice(index,1);
            return true
        }
        return false;

    }

}