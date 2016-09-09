window.addEventListener("load", function() {
	var boton = document.getElementById("calcular");
	boton.addEventListener("click", function() {
		var nombre = document.getElementById("nombre").value;
		var edad = parseInt(document.getElementById("edad").value);
		var genero = document.getElementById("genero").value;
	

	function persona(nombre, edad, genero) {
		this.nombre = nombre;
		this.edad = edad;
		this.genero = genero;
		this.mayorDeEdad = (edad >= 18);		
		this.otro = function(){
			 return `Hola mi nombre es ${this.nombre}, y tengo de edad ${this.edad} años y soy ` +((this.mayorDeEdad) ? "mayor" : "menor") + ` de edad`;
		};
	}
	var humano = new persona(nombre, edad,genero);
	document.getElementById('resultado').innerHTML = humano.otro();
	});
});


