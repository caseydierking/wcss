document.addEventListener("DOMContentLoaded", function (event) {
	var audio = document.querySelector('audio');
	audio.volume = 0.05;

	document.onmouseover = function () {
		audio.play();
	};
});

function changeCursor(elem,type) {
	document.getElementsByClassName('horse')[0].className = 'horse ' + type;
	var elems = document.querySelectorAll(".icon-bar button");
	[].forEach.call(elems, function(el) { el.classList.remove("active"); });
	elem.classList.add('active');
}