function mostrarDocument() {
	/*DOM:Objeto document*/
	console.log(document);
}

function porIdentificador(id){
	console.log(document.getElementById(id));
}

function porEtiqueta(tag) {
	lista = document.getElementsByTagName(tag);
	console.log(lista);

	/*Mostrar el elementos en la posición 0 y 5*/
	console.log('elemento 0', lista[0]) 
	console.log('elemento 5', lista[5])

	/*Mostrar cada uno de los elementos*/
	for (var i = 0; i < lista.length; i++) {
		var elementos = lista[i];
		console.log('elemento: ' + i, elementos)
	}

}

function porNombreDeClase(className) {
	lista = document.getElementsByClassName(className);
	console.log(lista);
	/*Mostrar cada uno de los elementos*/

	for (var i = 0; i < lista.length; i++) {
		var elementos = lista[i];
			console.log('elemento: ' + i, elementos)
		}	


}

function cambiarEstiloImagen() {
	/*Usando los selectores adecuados, cambie la clase de las imágenes a img-thumbnail*/
	let imagen = document.querySelectorAll("div[class='caption'] > img")
	for (var i = 0; i<imagen.length; i++) {
		var elementos = lista[i];
		elementos.setAtribute('class', 'img-thumbnail')
		console.log('elemento: ' + i, elementos)
	}
}

function cambiarInnerOutter() {
	/*por Id*/
	
	/*Inner*/


	/*Outer*/

}

function agregarPie() {
	/*crear un footer*/
	/*var footer = document.createElement('footer');*/
	let footer = $("<footer>");

	/*Agregar la clase: footer y text-center*/
	/*footer.setAtribute("class", "footer text-center");*/
	footer.attr("class", "footer text-center")

	/*crear un p*/
	/*var p = document.createElement('p');*/
	let p = $("<p>");

	/*crear texto: CinemaTu*/
	var texto = document.createTextNode('CinemaTu');


	/*Agregar texto a p*/
	p.appendChild(texto)
	/*agregar p a footer*/
	footer.appendChild(p)
	/*crear un texto con el año*/
	var anio = document.createTextNode('2017')
	/*agregar el año al titulo antes del texto de CinemaTu*/
	p.inserteBefore(anio, texto)
	/*agregar el footer a contenedor principal*/
	var cont_Principal = document.getElementById('contenedor-principal')
	cont_Principal.appendChild(footer)
	/*reemplazar el innerElement del titulo por 2017 - CinemaTu */
	p.innerHTML = "2017 - CinemaTu"
	/*crear un nodo con texto con '2017 - CinemaTu' y reemplazar por titulo*/
	var texto2 = document.createTextNode("2017 - CinemaTu")
	footer.replaceChild(texto2,p)
	/*remover el footer*/
	cont_Principal.removeChild(footer)

}

function redirigir() {
	/*redirigr a http://www.google.com */
	
}

function medotoDarClick() {
	/*registrar a cada boton una reacción diferente*/
	/*Mostrar el título de la película correspondiente*/
	var jumbotron = document.getElementsByClassName('jumbotron');
	/*var carteleras = document.getElementsByClassName('caption');*/

	jumbotron[0].onmouseover = function(){
		alert('¡Ganaste unas entradas!');
	}
	/*
	carteleras[0].onmouseover = function(){
		alert('La Momia');
	}

	carteleras[1].onmouseover = function(){
		alert('El Mago de Oz (Clásico)');
	}

	carteleras[2].onmouseover = function(){
		alert('Z La Ciudad Perdida')
	}
	*/
	var botones = document.querySelectorAll('a.btn');
	for (var i = 0; i < botones.length; i++) {
		botones[i].onclick = function(){
			abuelo = this.parentElement.parentElement;
			texto = abuelo.getElementsByTagName('h3')[0].innerHTML;
			alert(texto);
		}
	}
}
 
function listenerDarClick() {
	/*registrar dos listeners al primer boton*/
	/*Mostrar el título de la película correspondiente*/
	var titulos = document.querySelectorAll('h3.pelicula');
	var botones = document.querySelectorAll('a.btn');
	for (var i = 0; i < botones.length; i++) {
		let nombre = titulos[i].innerHTML;
		botones[i].addEventListener('click', function(){
			alert("Título de la película: ", +nombre)
		})
	}
}

window.onload = function() {
	/*cargar las dos últimas funciones*/
	medotoDarClick();
	listenerDarClick();

	$('#thumb1').click(function(){
		alert('Click en la imagen');
		return false;
	});

	$('.caption').click(function(){
		alert('Click en caption');
	})
}
