"use strict";
// List of edible items
var FOOD_LIST = ['apple','carrot','hay','pumpkin'];
const weatherList = document.querySelectorAll('.weather');
const audio = document.querySelector('audio');
let currentWeather ='sun';
let currentCursor = 'text-center';

window.onload = () => {
    makePoo();
    loadWeather();
};

document.addEventListener("DOMContentLoaded", function (event) {
    setUpAudio();
    checkIfNightTime();
});

const setUpAudio = () => {
    var song = ['audio/Horse-and-carriage-passing-by.mp3', 'audio/Horse-hooves-sound.mp3', 'audio/Horse-sound-effect.mp3'];
    var songRandom = song[Math.floor(Math.random() * song.length)];
    audio.volume = 0.05;
    audio.src = songRandom;
    audio.type = "audio/mpeg";
<<<<<<< HEAD

||||||| merged common ancestors
<<<<<<<<< Temporary merge branch 1

||||||||| merged common ancestors
=========
    
>>>>>>>>> Temporary merge branch 2
=======
>>>>>>> e52f3c4fa5cf2700613f9c404fa9f8b02f711ad7
    audio.addEventListener('ended', function () {
        audio.src = 'audio/bliss.mp3';
    });
    document.onmouseover = function () {
        audio.play();
    };
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

const makePoo = () => {
    let rand = Math.round(Math.random() * (10000) + 20000);
    setTimeout(function() {
        makePoo();
        const poop = document.getElementsByClassName('poop')[0];
        const displayStyle = window.getComputedStyle(poop).getPropertyValue('display');
        poop.style.display = displayStyle === 'none' ? 'inline' : displayStyle;
    }, rand);
};

<<<<<<< HEAD
||||||| merged common ancestors
<<<<<<<<< Temporary merge branch 1
const cleanUpPoo = poop => {
  const cursorType = document.getElementsByClassName("horse")[0].className;
  if (cursorType === "horse pitchfork") {
    poop.style.display = "none";
  }
||||||||| merged common ancestors
const cleanUpPoo = (poop) => {
    const cursorType = document.getElementsByClassName('horse')[0].className;
    if (cursorType === 'horse pitchfork') {
        poop.style.display = 'none';
    }
=========
=======

>>>>>>> e52f3c4fa5cf2700613f9c404fa9f8b02f711ad7
const cleanUpPoo = (poop) => {
    const cursorType = document.getElementsByClassName('horse')[0].className;
    if (cursorType === 'horse snow pitchfork' || 'horse sun pitchfork' || 'horse rain pitchfork') {
        poop.style.display = 'none';
    }
};
<<<<<<< HEAD
||||||| merged common ancestors
<<<<<<<<< Temporary merge branch 1
/**
* @description Clap counter
*   Author - @adsingh14
*/

// let clap = 1;
// const clapBtn = document.getElementById("clapBtn"),
// clapCounter = document.querySelector('.clapCounter');

// clapBtn.addEventListener('click', function(){
//     clapCounter.textContent = clap ++;
//     setTimeout(function () {
//         clapCounter.classList.remove('pulse');
//     }, 200);
//     clapCounter.classList.add('animated', 'pulse', 'faster');
// });
=======

/**
* @description Clap counter
*   Author - @adsingh14
*/

// let clap = 1;
// const clapBtn = document.getElementById("clapBtn"),
// clapCounter = document.querySelector('.clapCounter');

// clapBtn.addEventListener('click', function(){
//     clapCounter.textContent = clap ++;
//     setTimeout(function () {
//         clapCounter.classList.remove('pulse');
//     }, 200);
//     clapCounter.classList.add('animated', 'pulse', 'faster');
// });
>>>>>>> e52f3c4fa5cf2700613f9c404fa9f8b02f711ad7

const loadWeather = () => {
    for(let weather of weatherList){
        weather.addEventListener('click', () => {
            currentWeather = weather.id;
            playWeatherMusic();
            updateBackground();
        }
    )}
}

const playWeatherMusic = () => {
    let music = currentWeather === 'sun' ? 'bliss' : currentWeather;
    audio.src = `audio/${music}.mp3`;

    audio.loop = "true";
    audio.load();
    audio.play();
}

const updateBackground = () => {
    let background = document.querySelector('#horse-div');
    background.className = `horse ${currentWeather} ${currentCursor}`
}
<<<<<<< HEAD


/**
 * @description Clap counter
 *   Author - @adsingh14
 */

// let clap = 1;
// const clapBtn = document.getElementById("clapBtn"),
// clapCounter = document.querySelector('.clapCounter');

// clapBtn.addEventListener('click', function(){
//     clapCounter.textContent = clap ++;
//     setTimeout(function () {
//         clapCounter.classList.remove('pulse');
//     }, 200);
//
||||||| merged common ancestors
||||||||| merged common ancestors
=========

const loadWeather = () => {
    for(let weather of weatherList){
        weather.addEventListener('click', () => {
            currentWeather = weather.id;
            playWeatherMusic();
            updateBackground();
        }
    )}
}

const playWeatherMusic = () => {
    let music = currentWeather === 'sun' ? 'bliss' : currentWeather;
    audio.src = `audio/${music}.mp3`;

    audio.loop = "true";
    audio.load();
    audio.play();
}

const updateBackground = () => {
    let background = document.querySelector('#horse-div');
    background.className = `horse ${currentWeather} ${currentCursor}`
}
>>>>>>>>> Temporary merge branch 2
=======
>>>>>>> e52f3c4fa5cf2700613f9c404fa9f8b02f711ad7
