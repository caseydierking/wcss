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


// dark-theme js

var myFunc = function(){
	document.body.classList.add("body-dark");
};
var myFunc2 = function(){
	document.body.classList.remove("body-dark");
};
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('termsChkbx').addEventListener("change", function(){
        if(this.checked) {
			// document.body.backgroundColor = "black";
			myFunc();
        } else {
			// document.body.backgroundImage = url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23dae1e7' fill-opacity='0.4'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");;
			myFunc2();
		}
    }, false);
});