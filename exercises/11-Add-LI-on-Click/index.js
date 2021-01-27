let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	let element = document.getElementById("myList");
	let elem1 = document.createElement("li");
	elem1.innerHTML = "Fourth element";
	document.querySelector("#myList").appendChild(elem1);
});
