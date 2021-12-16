const integrantes1 = new Map();
integrantes1.set("48963910s",["Ruben","Castellano Fernandez"]);
integrantes1.set("58963910s",["Manu","Castillo Fernando"]);
integrantes1.set("38963910s",["Pablo","Cabezas Macias"]);

var banda1 = new Banda("Los manquitos",2019,integrantes1,"679051051","Rock");

const integrantes2 = new Map();
integrantes2.set("68963910s",["Juan","Castellano Fernandez"]);
integrantes2.set("78963910s",["Antonio","Castillo Fernando"]);
integrantes2.set("88963910s",["Paloma","Cabezas Macias"]);

var banda2 = new Banda("Los Chungitos",2013,integrantes2,"679052052","Pop");

const integrantes3 = new Map();
integrantes3.set("18963910s",["Maria","Castellano Fernandez"]);
integrantes3.set("28963910s",["Elena","Castillo Fernando"]);
integrantes3.set("38963910s",["Antonia","Cabezas Macias"]);

var banda3 = new Banda("La tienda en casa",2001,integrantes3,"679053053","House");

var bandas = new Array(banda1,banda2,banda3)
var listaEvento = new Listado(bandas);

//listaEvento.imprimirListadoBandas();

/*var listaEncontrado=listaEvento.buscarBandaPorNombre("La tienda en casa");
listaEncontrado.forEach(banda => {
    banda.mostrarBanda();
});*/

/*var listaEncontrado=listaEvento.buscarBandaPorEstilo("Pop");
listaEncontrado.forEach(banda => {
    banda.mostrarBanda();
});*/

/*var ordenado = listaEvento.ordenarBandasPorAño();
ordenado.forEach(banda => {
    banda.mostrarBanda();
});*/

var eliminado = listaEvento.eliminarBanda("Los manquitos");
document.write(eliminado);