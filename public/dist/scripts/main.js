"use strict"; // List of edible items

var FOOD_LIST = ['apple', 'carrot', 'hay', 'pumpkin'];
var weatherList = document.querySelectorAll('.weather');
var audio = document.querySelector('audio');
var currentWeather = 'sun';
var currentCursor = 'text-center';

window.onload = function () {
  makePoo();
  loadWeather();
};

document.addEventListener("DOMContentLoaded", function (event) {
  setUpAudio();
  checkIfNightTime();
});

var setUpAudio = function setUpAudio() {
  var song = ['audio/Horse-and-carriage-passing-by.mp3', 'audio/Horse-hooves-sound.mp3', 'audio/Horse-sound-effect.mp3'];
  var songRandom = song[Math.floor(Math.random() * song.length)];
  audio.volume = 0.05;
  audio.src = songRandom;
  audio.type = "audio/mpeg";
  audio.addEventListener('ended', function () {
    audio.src = 'audio/bliss.mp3';
  });

  document.onmouseover = function () {
    audio.play();
  };
};

function checkIfNightTime() {
  var currentHours = new Date().getHours();
  var isCurrentlyNightTime = currentHours >= 18 || currentHours <= 8;
  var bodyElement = document.querySelector("body");
  var isNightTimeAlreadyToggled = bodyElement.classList.contains("dark-mode");

  if (isCurrentlyNightTime && !isNightTimeAlreadyToggled) {
    bodyElement.classList.add("dark-mode");
  } else if (!isCurrentlyNightTime && isNightTimeAlreadyToggled) {
    bodyElement.classList.remove("dark-mode");
  }
}

setInterval(checkIfNightTime, 5 * 60 * 1000);

function changeCursor(elem, type) {
  elem.classList.add('animated');
  elem.classList.add('tada');
  currentCursor = type;
  updateBackground();
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
    element.classList.add("active");
  }
}

function onHorseMouseUp(img) {
  img.parentElement.classList.remove("active");
}

document.querySelector(".dark-mode-btn").addEventListener("click", function () {
  document.querySelector("body").classList.toggle("dark-mode");
});

var makePoo = function makePoo() {
  var rand = Math.round(Math.random() * 10000 + 20000);
  setTimeout(function () {
    makePoo();
    var poop = document.getElementsByClassName("poop")[0];
    var displayStyle = window.getComputedStyle(poop).getPropertyValue("display");
    poop.style.display = displayStyle === "none" ? "inline" : displayStyle;
  }, rand);
};

var cleanUpPoo = function cleanUpPoo(poop) {
  var cursorType = document.getElementsByClassName("horse")[0].className;

  if (cursorType === "horse pitchfork") {
    poop.style.display = "none";
  }
};
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


var loadWeather = function loadWeather() {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    var _loop = function _loop() {
      var weather = _step.value;
      weather.addEventListener('click', function () {
        currentWeather = weather.id;
        playWeatherMusic();
        updateBackground();
      });
    };

    for (var _iterator = weatherList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      _loop();
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
};

var playWeatherMusic = function playWeatherMusic() {
  var music = currentWeather === 'sun' ? 'bliss' : currentWeather;
  audio.src = "audio/".concat(music, ".mp3");
  audio.loop = "true";
  audio.load();
  audio.play();
};

var updateBackground = function updateBackground() {
  var background = document.querySelector('#horse-div');
  background.className = "horse ".concat(currentWeather, " ").concat(currentCursor);
};
