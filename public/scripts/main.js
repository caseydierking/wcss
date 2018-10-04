// List of edible items
var FOOD_LIST = ['apple','carrot','hay'];

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
    [].forEach.call(elems, function (el) {
        el.classList.remove("active");
    });
    elem.classList.add('active');
}

function checkFood(item) {
  return FOOD_LIST.includes(item);
}

function onHorseMouseDown(img) {
    var element = img.parentElement;
    var isFood = checkFood(element.classList[element.classList.length-1]);
    if (isFood) {
        element.classList.add("active");
    }
}

function onHorseMouseUp(img) {
    img.parentElement.classList.remove("active");
}

function classToggle() {
    document.querySelector('body').classList.toggle('dark-mode');
}
document.querySelector('.dark-mode-btn').addEventListener('click', classToggle);