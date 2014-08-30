//Genera un número aleatorio entre un rango de enteros
function aleatorio (minimo, maximo) 
{
	var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo) ;
	return numero;
}

var piedra = 0;
var papel = 1;
var tijera = 2;
var opciones = ["piedra", "papel", "tijera"]

var opcionUsuario;
var opcionMaquina = aleatorio(0,2);

opcionUsuario = prompt("¿Que eliges?\npiedra: 0\n papel: 1\ntijera: 2", 
	0);

alert("Elegiste " + opciones[opcionUsuario]);
alert("JavaScript Eligio " + opciones[opcionMaquina]);
//bloques no tienen ;
if (opcionUsuario == piedra) 
{
	if (opcionMaquina == piedra) 
	{
		alert("Empate");
	}
	else if (opcionMaquina == papel) 
	{
		alert("Perdiste Pendejo");
	}
	else if (opcionMaquina == tijera) 
	{
		alert("Ganaste Puto");
	}
}

else if (opcionUsuario == papel) 
{
	if (opcionMaquina == piedra) 
	{
		alert("Ganaste");
	}
	else if (opcionMaquina == papel) 
	{
		alert("Empate");
	}
	else if (opcionMaquina == tijera) 
	{
		alert("Perdiste");
	}
}

else if (opcionUsuario == tijera) 
{
	if (opcionMaquina == piedra) 
	{
		alert("Perdiste");
	}
	else if (opcionMaquina == papel) 
	{
		alert("Ganaste");
	}
	else if (opcionMaquina == tijera) 
	{
		alert("Empate");
	}
}

else 
{
	alert("Elija Bn Pendejo");
}

