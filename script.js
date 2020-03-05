function randomColor() {
	return "#" + Math.floor(Math.random() * (999999 - 100000) + 100000);
}
document.getElementById('but').addEventListener("click", function(){
	document.body.style.backgroundColor = randomColor(); 
});

