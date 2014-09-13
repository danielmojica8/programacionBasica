var tablero;
var fondo = 
{
	imagenURL: "fondo.png",
	imagenOK: false

};
var tifis = 
{
	x: 300,
	y: 100,
	frenteURL: "diana-frente.png",
	frenteOK: false
};

var liz = 
{
	lizURL: "liz.png",
	lizOK: false,
	x: 50,
	y: 50,
};

function inicio()
{
    var canvas = document.getElementById("campo");
    tablero = canvas.getContext("2d");
    fondo.imagen = new Image();
    fondo.imagen.src = fondo.imagenURL;
//onload = evento de carga
    fondo.imagen.onload = confirmarFondo;

    tifis.frente = new Image();
    tifis.frente.src = tifis.frenteURL;
    tifis.frente.onload = confirmarFrente;

    liz.liz = new Image();
    liz.liz.src= liz.lizURL;
    liz.liz.onload = confirmarLiz;
}

function dibujar() 
{
	//drawimage = dibujar imagen
	tablero.drawImage(fondo.imagen, 0, 0);
}

function confirmarFondo () 
{
	fondo.imagenOK = true;
	dibujar();
}

function confirmarFrente () 
{
	tifis.frenteOK = true;
	dibujar();
}

function dibujar () 
{
	if(fondo.imagenOK == true)
	{
		tablero.drawImage(fondo.imagen, 0, 0);	
	}
	if(tifis.frenteOK == true)
	{
		tablero.drawImage(tifis.frente, tifis.x, tifis.y);
	}
	if(liz.lizOK == true) 
	{
		tablero.drawImage(liz.liz, liz.x, liz.y);
	}
}

function confirmarLiz () 
{
	liz.lizOK = true;
	dibujar();
}