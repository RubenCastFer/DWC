//Ruben Castellano Fernandez
window.addEventListener("load", iniciar);

function iniciar() {
	document.getElementById("codigo").addEventListener("blur", verificarCodigo);
    

}

function verificarCodigo(){
    var codigo = document.getElementById("codigo").value;
	var patron = /^[a-zA-Z]{3}-\d{1,5}$/;
    var error = document.getElementById("error");

    if (patron.test(codigo)) {
        if (error.firstChild!=null) {
            error.firstChild.remove();
            document.getElementById("enviar").addEventListener("click", enviar);        
        }else{
            document.getElementById("enviar").addEventListener("click", enviar);        
        }
	}
	else {
        if (error.firstChild!=null) {
            error.firstChild.remove();
		    error.appendChild(document.createTextNode("El codigo no cumple el formato establecido"));
	
        } else{
            error.appendChild(document.createTextNode("El codigo no cumple el formato establecido"));
        }
    }
}

function enviar(){
	
    var formulario = document.getElementById("registro");
    var codigo = document.getElementById("codigo").value;
    var patron = /^[a-zA-Z]{3}-\d{1,5}$/;
    if (patron.test(codigo)) {

        sessionStorage.setItem("codigo", codigo);
        formulario.action = "mailto:ruben.castellano.fernandez.al@iespoligonosur.org";
        formulario.method = "POST";
        formulario.submit();    
    }


}