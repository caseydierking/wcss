document.addEventListener("DOMContentLoaded", function(event) {
    var audio = document.querySelector('audio');
    audio.volume = 0.05;

    document.onmouseover = function() {
        audio.play();
    };
});


function changeCursor(elem, type) {
    document.getElementsByClassName('horse')[0].className = 'horse ' + type;
    var elems = document.querySelectorAll(".icon-bar button");
    [].forEach.call(elems, function(el) { el.classList.remove("active"); });
    elem.classList.add('active');
}


// Horse eye movements - Aman(@adsingh14)
var spacebarKey = 32,
    eye1 = document.querySelector('.eye1'),
    eye2 = document.querySelector('.eye2');

document.body.addEventListener('keypress',
    function myFunction(wink) {
        wink.preventDefault();
        var x = wink.spacebarKey || wink.spacebarKey;
        winky();
    });

function winky() {
    setTimeout(function() {
        eye1.style.animationName = 'eyelid_down';
        eye2.style.animationName = 'eyelid_up';
    }, 500);
    eye1.style.animationName = '';
    eye2.style.animationName = '';
}