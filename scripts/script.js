const container = document.querySelector('.container');

let toAdd = document.createDocumentFragment();

for (var i = 0; i < 16; i++) {
	var newDiv = document.createElement("div");
	newDiv.id = "pixel" + (i + 1);
	newDiv.className = "pixel";
	toAdd.appendChild(newDiv);
}

container.appendChild(toAdd);


