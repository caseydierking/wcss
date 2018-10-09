// List of edible items
var FOOD_LIST = ['apple','carrot','hay','pumpkin'];



window.onload = () => {
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


function changeCursor(elem,type) {

    document.getElementsByClassName('horse')[0].className = 'horse ' + type;
    var elems = document.querySelectorAll('.icon-bar button');
    [].forEach.call(elems, function (el) {
        el.classList.remove('active');
    });
    elem.classList.add('active');

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

const makePoo = () => {
    let rand = Math.round(Math.random() * (10000) + 20000);
    setTimeout(function() {
        makePoo();
        const poop = document.getElementsByClassName('poop')[0];
        const displayStyle = window.getComputedStyle(poop).getPropertyValue('display');
        poop.style.display = displayStyle === 'none' ? 'inline' : displayStyle;
    }, rand);
};

const cleanUpPoo = (poop) => {
    const cursorType = document.getElementsByClassName('horse')[0].className;
    if (cursorType === 'horse pitchfork') {
        poop.style.display = 'none';
    }
};
