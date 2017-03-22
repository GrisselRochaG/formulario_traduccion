
var btnIngresar = document.getElementById('boton');


function translate(){
	var titulo = document.getElementById("form-signin-heading");
	var mail = document.getElementById("inputEmail");
	var pass = document.getElementById("inputPassword");
	var remember = document.getElementsByTagName("span")[0];
	var sign = document.getElementsByClassName("btn")[0];

	titulo.innerHTML = "Inicia Sesión";
	mail.placeholder = "Ingresa tu correo";
	pass.placeholder = "Ingresa tu contraseña";
	remember.innerHTML = "Recuérdame";
	sign.innerHTML = "Ingresar";
}

translate();


function mostrar(event){
	var mail = document.getElementById("inputEmail").value;
	var pass = document.getElementById("inputPassword").value;

	var texto1 = document.createElement("p")
	var texto2 = document.createElement("p")
	var texto3 = document.createElement("p")
	var texto4 = document.createElement("p")

	texto1.innerHTML = "El correo ingresado es:"
	texto2.innerHTML = mail;
	texto3.innerHTML = "La contraseña proporcionada es:";
	texto4.innerHTML = pass;

	document.getElementById("padre").appendChild(texto1);
	document.getElementById("padre").appendChild(texto2);
	document.getElementById("padre").appendChild(texto3);
	document.getElementById("padre").appendChild(texto4);

	var mail = document.getElementById("inputEmail").value = "";
	var pass = document.getElementById("inputPassword").value = "";
	// event.preventDefault();
}

btnIngresar.addEventListener('click', mostrar);