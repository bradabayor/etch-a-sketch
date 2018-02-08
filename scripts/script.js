//VARIABLES + CONSTANTS

const CONTAINER = document.querySelector('.container');
const CANVAS = document.getElementById('canvas');
const NEWG = document.getElementById('newgrid');
const CLEARG = document.getElementById('cleargrid');
const PENCOL = document.getElementById('pencolor');
const GSIZE = document.getElementById('gridsize');

let pixels = document.getElementsByClassName("pixel");
let squares;
let color;

let linebreak = document.createElement("br");
let addDiv = document.createDocumentFragment();

//EVENT LISTENERS

NEWG.addEventListener('click', function() {
	createGrid();
});

CLEARG.addEventListener('click', function() {
	pixels = document.getElementsByClassName("pixel");
	let pixArr = Array.from(pixels);
	pixArr.forEach(function(e) {
		CANVAS.removeChild(e);
	});

});

PENCOL.addEventListener('click', function() {
	drawColor();
	PENCOL.style.backgroundColor = color;
	PENCOL.style.borderColor = color;
});

GSIZE.addEventListener('click', function() {
	squares = prompt("Pixels:")
	GSIZE.textContent = "Grid Size = " + squares;
});

//FUNCTIONS

function createGrid() {
	for (var i = 0; i < squares; i++) {		
		for (var j = 0; j < squares; j++) {
		var div = document.createElement("div");
		div.className = "pixel";
		div.style.height = (480 / squares) + "px";
		div.style.width = (480 / squares) + "px";
		addDiv.appendChild(div);
		}
		CANVAS.appendChild(addDiv);
		var linebreak = document.createElement("br");
		CANVAS.appendChild(linebreak);
	}
}	

function drawColor() {
	color = prompt("Enter pen color:");
	pixels = document.getElementsByClassName("pixel");
	for (i = 0; i < pixels.length; i++) {
		pixels[i].addEventListener("mouseover", function() {
			this.style.backgroundColor = color;
			});
	}
}






