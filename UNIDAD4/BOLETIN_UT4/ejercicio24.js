const modulo = new Map();
modulo.set("DWECL",[7,16]);
modulo.set("DWES",[9,16]);
modulo.set("DAW",[3,12]);
modulo.set("DIW",[6,16]);

let clave = modulo.keys();
for (let k of clave) {
   document.write("El modulo "+k+" tiene las siguientes horas " + modulo.get(k)[0]+" y alumnos " + modulo.get(k)[0]+"<br>");
}