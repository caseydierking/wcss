// List of edible items
var FOOD_LIST = ['apple','carrot','hay'];

document.addEventListener("DOMContentLoaded", function(){
    checkIfNightTime();
});

document.addEventListener("DOMContentLoaded", function (event) {
    var audio = document.querySelector('audio');
    audio.volume = 0.05;

    document.onmouseover = function () {
        audio.play();
    };
});

function checkIfNightTime()
{
    var currentHours = new Date().getHours();
    var isCurrentlyNightTime = (currentHours >= 18 || currentHours <= 8);
    var bodyElement = document.querySelector('body');
    var isNightTimeAlreadyToggled = bodyElement.classList.contains('dark-mode');

    if(isCurrentlyNightTime && !isNightTimeAlreadyToggled)
    {
        bodyElement.classList.add("dark-mode");
    }
    else if(!isCurrentlyNightTime && isNightTimeAlreadyToggled)
    {
        bodyElement.classList.remove("dark-mode");
    }
}
setInterval(checkIfNightTime, 5 * 60 * 1000);

<<<<<<< HEAD
function changeCursor(elem, type) {
  document.getElementsByClassName("horse")[0].className = "horse " + type;
  var elems = document.querySelectorAll(".icon-bar button");
  [].forEach.call(elems, function(el) {
    el.classList.remove("active");
  });
  elem.classList.add("active");
=======
function changeCursor(elem,type) {
    document.getElementsByClassName('horse')[0].className = 'horse ' + type;
    var elems = document.querySelectorAll(".icon-bar button");
    [].forEach.call(elems, function (el) {
        el.classList.remove("active");
    });
    elem.classList.add('active');
>>>>>>> parent of cd7fd0f... Merge pull request #43 from adsingh14/master
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

document.querySelector('.dark-mode-btn').addEventListener('click', function(){
    document.querySelector('body').classList.toggle('dark-mode');
});