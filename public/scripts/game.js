var myGamePiece;
var appleArr = [];
var cycleThroughPhotos = 0

//To add components to the canvas, follow the steps below:
//1. Declare variable at the top of the page.
// example: var apple;
//2. Add a new component in the startGame() function.
// example: apple = new component(200, 200, "images/apple.png", 200, 200, "image");
//3. Add item to the updateGameArea() function.
// example:  apple.newPos(); 
//           apple.update();
function playGame() {
    var horse = document.getElementById("horse-div")
    horse.style.display = "none"
    var iconBar = document.getElementById("right-icon-bar-div")
    iconBar.style.display = "none"
    iconBar = document.getElementById("weather-icons")
    iconBar.style.display = "none"
    var game = document.getElementById("game-div");
    game.style.display = "flex";
    var stopGameButton = document.getElementById("stop-game-button");
    stopGameButton.style.display = "block";
    var playGameButton = document.getElementById("play-game-button");
    playGameButton.style.display = "none";
    var startGameButton = document.getElementById("start-game-button");
    if (typeof myGamePiece == 'undefined') {
        startGameButton.style.display = "block";
    }
}


function startGame() {
    var startGameButton = document.getElementById("start-game-button");
    startGameButton.style.display = "none";

    myGameArea.start();
    myGamePiece = new component(130, 100, "images/horse-movements/horse-all.png", 10, 120, "image", 0, 0, 250, 188);

    // init apples

    var appleNumber = Math.random() * 10;
    for (var i = 0; i < appleNumber; i++) {
        var x = Math.random() * 800;
        var y = Math.random() * 550;
        var apple = new component(100, 80, "images/apple.svg", x, y, "image", 0, 0, 250, 188);
        appleArr.push({
            x: x,
            y: y,
            apple: apple
        })
    }
}

function stopGame() {
    var game = document.getElementById("game-div");
    game.style.display = "none";

    var horse = document.getElementById("horse-div");
    horse.style.display = "block";

    var iconBar = document.getElementById("right-icon-bar-div");
    iconBar.style.display = "block";

    iconBar = document.getElementById("weather-icons")
    iconBar.style.display = "block"

    var playGameButton = document.getElementById("play-game-button");
    playGameButton.style.display = "block";

    var stopGameButton = document.getElementById("stop-game-button");
    stopGameButton.style.display = "none";

    var startGameButton = document.getElementById("start-game-button");
    startGameButton.style.display = "none";
}

var myGameArea = {
    canvas: document.createElement("canvas"),
    start: function () {
        this.canvas.width = 800;
        this.canvas.height = 550;
        this.context = this.canvas.getContext("2d");
        document.getElementById("game-div").appendChild(this.canvas)
        //document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
        this.keyArr = [];
        window.addEventListener('keydown', function (e) {
            if (!myGameArea.keyArr.includes(e.keyCode)) {
              myGameArea.keyArr.push(e.keyCode);
            }
            myGameArea.activeKey = e.keyCode;
        })
        window.addEventListener('keyup', function (e) {
            if (myGameArea.keyArr.includes(e.keyCode)) {
                myGameArea.keyArr.splice(myGameArea.keyArr.indexOf(e.keyCode), 1);
                // if a key is released but others are still held, make the active key the most recent held one
                if (myGameArea.keyArr.length > 0) {
                    myGameArea.activeKey = myGameArea.keyArr[myGameArea.keyArr.length - 1];
                } else {
                    myGameArea.activeKey = false;
                }
            }
        })
    },
    clear: function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

function component(width, height, color, x, y, type, cropx, cropy, cropwidth, cropheight) {
    this.type = type;
    if (type == "image") {
        this.image = new Image();
        this.image.src = color;
    }
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;
    if (typeof cropx != 'undefined') {
        this.cropx = cropx;
        this.cropy = cropy;
        this.cropwidth = cropwidth;
        this.cropheight = cropheight;
    }
    this.update = function () {
        ctx = myGameArea.context;
        if (type == "image") {
            if (typeof cropx != 'undefined') {
                ctx.drawImage(this.image,
                    this.cropx,
                    this.cropy,
                    this.cropwidth,
                    this.cropheight,
                    this.x,
                    this.y,
                    this.width,
                    this.height
                );
            } else {
                ctx.drawImage(this.image,
                    this.x,
                    this.y,
                    this.width,
                    this.height);
            }

        } else {
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }
    this.newPos = function () {
        this.x += this.speedX;
        this.y += this.speedY;

        // if horse close to the apple, remove apple from appleArr
        appleArr.forEach(
            (apple, index, object) => {
                if (Math.abs(this.x - apple.x) < 100 && Math.abs(this.y - apple.y) < 100) {
                    object.splice(index, 1);
                }
            }
        )
    }
}

function updateGameArea() {
    myGameArea.clear();
    myGamePiece.speedX = 0;
    myGamePiece.speedY = 0;
    if (myGameArea.activeKey && myGameArea.activeKey == 37) {
        moveleft();
    }
    if (myGameArea.activeKey && myGameArea.activeKey == 39) {
        moveright();
    }
    if (myGameArea.activeKey && myGameArea.activeKey == 38) {
        moveup();
    }
    if (myGameArea.activeKey && myGameArea.activeKey == 40) {
        movedown();
    }
    
    appleArr.forEach(
        (appleObj) => {
            appleObj.apple.update();
        }
    )
    myGamePiece.newPos();
    myGamePiece.update();

}


function moveup() {
    myGamePiece.cropy = 564;
    if (cycleThroughPhotos <= 5) {
        myGamePiece.cropx = 0;
    } else if (cycleThroughPhotos < 10) {
        myGamePiece.cropx = 250;
    } else if (cycleThroughPhotos < 15) {
        myGamePiece.cropx = 500;
    } else if (cycleThroughPhotos < 20) {
        myGamePiece.cropx = 750;
    } else if (cycleThroughPhotos > 25) {
        cycleThroughPhotos = 0;
    }
    myGamePiece.speedY -= 1.25;
    cycleThroughPhotos += 1;
}

function movedown() {
    myGamePiece.cropy = 0;
    if (cycleThroughPhotos <= 5) {
        myGamePiece.cropx = 250;
    } else if (cycleThroughPhotos < 10) {
        myGamePiece.cropx = 500;
    } else if (cycleThroughPhotos < 15) {
        myGamePiece.cropx = 750;
    } else if (cycleThroughPhotos < 20) {
        myGamePiece.cropx = 0;
    } else if (cycleThroughPhotos > 25) {
        cycleThroughPhotos = 0
    }
    myGamePiece.speedY += 1.25;
    cycleThroughPhotos += 1;
}

function moveleft() {
    myGamePiece.cropy = 188;

    if (cycleThroughPhotos <= 5) {
        myGamePiece.cropx = 250;
        // console.log(myGamePiece);
    } else if (cycleThroughPhotos < 10) {
        myGamePiece.cropx = 500;
    } else if (cycleThroughPhotos < 15) {
        myGamePiece.cropx = 750;
    } else if (cycleThroughPhotos < 20) {
        myGamePiece.cropx = 0;
    } else if (cycleThroughPhotos > 25) {
        cycleThroughPhotos = 0;
    }
    myGamePiece.speedX -= 1.25;
    cycleThroughPhotos += 1;
}

function moveright() {
    myGamePiece.cropy = 376;
    if (cycleThroughPhotos <= 5) {
        myGamePiece.cropx = 0;
    } else if (cycleThroughPhotos < 10) {
        myGamePiece.cropx = 250;
    } else if (cycleThroughPhotos < 15) {
        myGamePiece.cropx = 500;
    } else if (cycleThroughPhotos < 20) {
        myGamePiece.cropx = 750;
    } else if (cycleThroughPhotos > 25) {
        cycleThroughPhotos = 0;
    }
    myGamePiece.speedX += 1.25;
    cycleThroughPhotos += 1;
}