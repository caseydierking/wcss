"use strict";
// List of edible items
var FOOD_LIST = ['apple', 'carrot', 'hay', 'pumpkin'];


window.onload = function () {
    makePoo();
};

document.addEventListener("DOMContentLoaded", function () {

    checkIfNightTime();
});

document.addEventListener("DOMContentLoaded", function (event) {
    var song = ['audio/Horse-and-carriage-passing-by.mp3', 'audio/Horse-hooves-sound.mp3', 'audio/Horse-sound-effect.mp3'];
    var songRandom = song[Math.floor(Math.random() * song.length)];
    var audio = document.querySelector('audio');
    audio.volume = 0.05;
    audio.src = songRandom;
    audio.type = "audio/mpeg";
    audio.addEventListener('ended', function () {
        audio.src = 'audio/bliss.mp3';
    });
    document.onmouseover = function () {
        audio.play();
    };

    checkIfNightTime();
});

function checkIfNightTime() {
    var currentHours = new Date().getHours();
    var isCurrentlyNightTime = (currentHours >= 18 || currentHours <= 8);
    var bodyElement = document.querySelector('body');
    var isNightTimeAlreadyToggled = bodyElement.classList.contains('dark-mode');

    if (isCurrentlyNightTime && !isNightTimeAlreadyToggled) {

        bodyElement.classList.add('dark-mode');
    }
    else if (!isCurrentlyNightTime && isNightTimeAlreadyToggled) {
        bodyElement.classList.remove('dark-mode');
    }
}

setInterval(checkIfNightTime, 5 * 60 * 1000);


function changeCursor(elem, type) {
    elem.classList.add('animated');
    elem.classList.add('tada');
    document.getElementsByClassName('horse')[0].className = 'horse ' + type;
    setTimeout(function () {
        elem.classList.remove('animated');
        elem.classList.remove('tada');
    }, 1500);


}

function checkFood(item) {
    return FOOD_LIST.includes(item);
}

function onHorseMouseDown(img) {
    var element = img.parentElement;
    var isFood = checkFood(element.classList[element.classList.length - 1]);
    if (isFood) {
        element.classList.add('active');
    }
}

function onHorseMouseUp(img) {
    img.parentElement.classList.remove('active');
}

document.querySelector('.dark-mode-btn').addEventListener('click', function () {
    document.querySelector('body').classList.toggle('dark-mode');
});

var makePoo = function () {
    var rand = Math.round(Math.random() * (10000) + 20000);
    setTimeout(function () {
        makePoo();
        var poop = document.getElementsByClassName('poop')[0];
        var displayStyle = window.getComputedStyle(poop).getPropertyValue('display');
        poop.style.display = displayStyle === 'none' ? 'inline' : displayStyle;
    }, rand);
};

var cleanUpPoo = function (poop) {
    var cursorType = document.getElementsByClassName('horse')[0].className;
    if (cursorType === 'horse pitchfork') {
        poop.style.display = 'none';
    }
};
