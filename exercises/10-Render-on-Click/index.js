let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	let elem1 = document.createElement("div");
	elem1.innerHTML = "Hello World";
	elem1.style.background = "yellow";
	document.body.appendChild(elem1);
});
