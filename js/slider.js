var fotos=["img/courtois.jpg", "img/ramos.jpg", "img/marcelo.jpg", "img/kroos.jpg", "img/benzema.jpg"];
var contador=0;


function pasarBoton(){
	contador++;
	if(contador>=fotos.length){
		contador=0;
	}
	document.getElementById("imagen").src = fotos[contador];
	formulario.botonera[contador].checked=true;
}

function retroceder(){
	contador--;
	if (contador<0){
		contador=fotos.length-1;
	}
	document.getElementById("imagen").src = fotos[contador];
	formulario.botonera[contador].checked=true;

}

function cambiarFoto(){
	for (i=0; i<formulario.botonera.length;i++){
		if(formulario.botonera[i].checked){
			imagen.src=formulario.botonera[i].value;
			contador=i;
			break;
		}
	}
}

function programa(){
	for (i=0; i<formulario.botonera.length; i++){
		formulario.botonera[i].addEventListener("change", cambiarFoto);
	}
	setInterval(pasarBoton, 2000);
}

window.addEventListener("load", programa);

