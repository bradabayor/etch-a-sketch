const container = document.querySelector('.container');
var linebreak = document.createElement("br");

let addDiv = document.createDocumentFragment();

function createGrid() {
	for (var i = 0; i < 16; i++) {		
		for (var j = 0; j < 16; j++) {
		var div = document.createElement("div");
		div.className = "pixel";
		addDiv.appendChild(div);
		}
		container.appendChild(addDiv);
		var linebreak = document.createElement("br");
		container.appendChild(linebreak);
	}
}	

function drawColor() {
	let color = prompt("Enter pen color:");
	var pixels = document.getElementsByClassName("pixel");
	for (i = 0; i < pixels.length; i++) {
		pixels[i].addEventListener("mouseover", function() {
			this.style.backgroundColor = color;
			});
	}
}






