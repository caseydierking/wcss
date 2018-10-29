"use strict";
// List of edible items
var FOOD_LIST = ['apple','carrot','hay','pumpkin'];
let weatherList = document.querySelectorAll('.weather');
const audio = document.querySelector('audio');
let currentWeather ='sun';
let currentCursor = 'text-center';

window.addEventListener("load", function () {
    makePoo();
    loadWeather();
});

document.addEventListener("DOMContentLoaded", function (event) {
    setUpAudio();
    checkIfNightTime();
});

const setUpAudio = function() {
    var song = ['audio/Horse-and-carriage-passing-by.mp3', 'audio/Horse-hooves-sound.mp3', 'audio/Horse-sound-effect.mp3'];
    var songRandom = song[Math.floor(Math.random() * song.length)];
    audio.volume = 0.05;
    audio.src = songRandom;
    audio.type = "audio/mpeg";
    
    audio.addEventListener('ended', function () {
        audio.src = 'audio/bliss.mp3';
    });
	playAudio(true);
}

//function to start/pause the audio based on boolean flag passed. Audio is played if flag is true
function playAudio(play) {
	if (play) {
		audio.muted = false;
		audio.play();
	} else {
		audio.pause();
	}
}

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
    elem.classList.add('animated');
    elem.classList.add('tada');

    currentCursor = type;
    updateBackground();

    setTimeout(function(){
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

const makePoo = function() {
    let rand = Math.round(Math.random() * (10000) + 20000);
    setTimeout(function() {
        makePoo();
        const poop = document.getElementsByClassName('poop')[0];
        const displayStyle = window.getComputedStyle(poop).getPropertyValue('display');
        poop.style.display = displayStyle === 'none' ? 'inline' : displayStyle;
    }, rand);
};

const cleanUpPoo = function(poop) {
    const cursorType = document.getElementsByClassName('horse')[0].className;
    if (cursorType === 'horse snow pitchfork' || 'horse sun pitchfork' || 'horse rain pitchfork') {
        poop.style.display = 'none';
    }
};

const loadWeather = function() {
    weatherList = Array.prototype.slice.call(weatherList);
	weatherList.forEach(function(weather) {
        weather.addEventListener("click", function() {
            currentWeather = weather.id;
            playWeatherMusic();
            updateBackground();
        });
	});
};

const playWeatherMusic = function() {
    let music = currentWeather === 'sun' ? 'bliss' : currentWeather;
    //audio.src = `audio/${music}.mp3`; 
	audio.src = 'audio/' + music + '.mp3';
    audio.loop = "true";
    audio.load();
    audio.play();
}

const updateBackground = function() {
    let background = document.querySelector('#horse-div');
    //background.className = `horse ${currentWeather} ${currentCursor}`
	background.className = 'horse ' + currentWeather + ' ' + currentCursor;
}
