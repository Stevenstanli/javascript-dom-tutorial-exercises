// Your code here
document.getElementById("addToDo").addEventListener("change", addItem);
var icon = document.getElementsByTagName("i");
for (var i = 0; i < icon.length; i++) {
	icon[i].addEventListener("click", removeItem);
}
function removeItem(e) {
	console.log(e);
	e.target.parentNode.parentNode.remove();
}
function addItem() {
	let tarea = document.getElementById("addToDo");
	var item = document.createElement("li");
	item.innerHTML = "<span><i class='fa fa-trash'></i></span>" + tarea.value;
	document.querySelector("ul").appendChild(item);
	item.querySelector("i").addEventListener("click", removeItem);
}
