function pokemon(n,v,a) 
{
	this.grito = "Pika";
	this.nombre = n;
	this.vida = v;
	this.ataque = a;
	this.gritar = function () 
	{
		alert(this.grito);
	}
}

function inicio() 
{
	var Picachu = new pokemon("Picachu", 100, 55);
	Picachu.vida = Picachu.vida - 10;
	Picachu.gritar();

	nombrePokemon.innerText = Picachu.nombre;
}






// function pokemon(nombrePokemon, vida, ataque)
//  {
 	
// 	var estructuraPokemon = 
// 	{
// 		nombre: nombrePokemon,
// 		vida: vida,
// 		ataque: ataque,
// 		datos: {tipo: "Tierra", debilidad: "Fuego"}
// 	};
// 	return estructuraPokemon;
// }

// var Picachu = pokemon("Picachu", 100, 55);
// var bulbasaur = pokemon("bulbasaur", 100, 50);




