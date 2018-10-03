"use strict";

// Approximate relative location of horse's mouth
var HORSE_MOUTH_X_START = 0.85;
var HORSE_MOUTH_X_END = 0.91;
var HORSE_MOUTH_Y_START = 0.39;
var HORSE_MOUTH_Y_END = 0.45;

// List of edible items
var FOOD_LIST = ['apple','carrot','hay'];

document.body.addEventListener("DOMContentLoaded", function (event) {
    var audio = document.querySelector('audio');
    audio.volume = 0.05;

    document.onmouseover = function () {
        audio.play();
    };
});

function changeCursor(elem, type) {
    document.getElementsByClassName('horse')[0].className = 'horse ' + type;
    var elems = document.querySelectorAll(".icon-bar button");
    [].forEach.call(elems, function (el) {
        el.classList.remove("active");
    });
    elem.classList.add('active');
}

function checkMouth(clickX, clickY, imgWidth, imgHeight) {
    var clickWidth = clickX / imgWidth;
    var clickHeight = clickY / imgHeight;
    return (HORSE_MOUTH_X_START <= clickWidth && clickWidth <= HORSE_MOUTH_X_END) &&
            (HORSE_MOUTH_Y_START <= clickHeight && clickHeight <= HORSE_MOUTH_Y_END)
}


function checkFood(item) {
  return FOOD_LIST.includes(item);
}


function onHorseMouseDown(img, event) {
    var element = img.parentElement;
    var isFood = checkFood(element.classList[element.classList.length-1]);
    var isMouth = checkMouth(event.offsetX, event.offsetY, img.width, img.height);
    if ((isFood && isMouth) || (!isFood && !isMouth)) {
        element.classList.add("active");
    }
}

function onHorseMouseUp(img, event) {
    img.parentElement.classList.remove("active");
}
