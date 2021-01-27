window.onload = function() {
	console.log("The website was loaded...");
	let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];

	// your code here
	for (let i = 0; i <= countries.length; i++) {
		let button = document.querySelector("#mySelect");
	}

	let button = document.querySelector("#mySelect");
	button.addEventListener("click", function() {
		//your code here
		let element = document.getElementById("myList");
		let elem1 = document.createElement("li");
		elem1.innerHTML = "Fourth element";
		document.querySelector("#myList").appendChild(elem1);

		let beginning = "<ul>";
		let liststring = "<li>" + "First Item" + "</li>" + "<li>" + "Second Item" + "</li>" + "<li>" + "Third  Item" + "</li>";
		let ending = "</ul>";

		// do not modify after this line
		document.querySelector("#myDiv").innerHTML = beginning + liststring + ending;
	});
};
