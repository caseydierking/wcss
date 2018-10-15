var myGamePiece;
var cycleThroughPhotos = 0

//To add components to the canvas, follow the steps below:
//1. Declare variable at the top of the page.
// example: var apple;
//2. Add a new component in the startGame() function.
// example: apple = new component(200, 200, "images/apple.png", 200, 200, "image");
//3. Add item to the updateGameArea() function.
// example:  apple.newPos(); 
//           apple.update();

var apple;
var hay;
var brush;
var carrot;
var pumpkin;
var pitchfork;

function startGame() {
    
    var horse = document.getElementById("horse-div")
    horse.style.display = "none"
    var iconBar = document.getElementById("icon-bar-div")
    iconBar.style.display = "none"
    
    myGameArea.start();
    myGamePiece = new component(130, 100, "images/horse-movements/horse-right.png", 10, 120, "image");
    
    //adding new components to the canvas
    apple = new component(30,30, "images/apple.svg", 100, 250, "image");
    hay = new component(50,50,"images/hay.svg", 350,400, "image");
    brush = new component(35,35,"images/brush.svg", 500,150, "image");
    carrot = new component(25,25,"images/carrot.svg", 50,350, "image");
    pumpkin = new component(45,45,"images/pumpkin.svg", 590,50, "image");
    pitchfork = new component(55,55,"images/pitchfork.svg", 500,200, "image");
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 800;
        this.canvas.height = 550;
        this.context = this.canvas.getContext("2d");
        document.getElementById("game-div").appendChild(this.canvas)
        //document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
        window.addEventListener('keydown', function (e) {
                                myGameArea.key = e.keyCode;
                                })
        window.addEventListener('keyup', function (e) {
                                myGameArea.key = false;
                                })
    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

function component(width, height, color, x, y, type) {
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
    this.update = function(){
        ctx = myGameArea.context;
        if (type == "image") {
            ctx.drawImage(this.image,
                          this.x,
                          this.y,
                          this.width, this.height);
        } else {
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;
    }
}

function updateGameArea() {
    myGameArea.clear();
    myGamePiece.speedX = 0;
    myGamePiece.speedY = 0;
    if (myGameArea.key && myGameArea.key == 37) {moveleft(); }
    if (myGameArea.key && myGameArea.key == 39) {moveright(); }
    if (myGameArea.key && myGameArea.key == 38) {moveup(); }
    if (myGameArea.key && myGameArea.key == 40) {movedown();}
    myGamePiece.newPos();
    myGamePiece.update();
    
    //new components
    apple.newPos();
    apple.update();
    hay.newPos();
    hay.update();
    brush.newPos();
    brush.update();
    carrot.newPos();
    carrot.update();
    pumpkin.newPos();
    pumpkin.update();
    pitchfork.newPos();
    pitchfork.update();
    
}


function moveup() {
    if (cycleThroughPhotos <= 5) {
        myGamePiece.image.src = "images/horse-movements/horse-up.png";
    } else if (cycleThroughPhotos < 10) {
        myGamePiece.image.src = "images/horse-movements/horse-up1.png";
    } else if (cycleThroughPhotos < 15) {
        myGamePiece.image.src = "images/horse-movements/horse-up2.png";
    } else if (cycleThroughPhotos < 20) {
        myGamePiece.image.src = "images/horse-movements/horse-up3.png";
    } else if (cycleThroughPhotos > 25) {
        cycleThroughPhotos = 0;
    }
    myGamePiece.speedY -= 1;
    cycleThroughPhotos += 1;
}

function movedown() {
    if (cycleThroughPhotos <= 5) {
        myGamePiece.image.src = "images/horse-movements/horse-down.png";
    } else if (cycleThroughPhotos < 10) {
        myGamePiece.image.src = "images/horse-movements/horse-down1.png";
    } else if (cycleThroughPhotos < 15) {
        myGamePiece.image.src = "images/horse-movements/horse-down2.png";
    } else if (cycleThroughPhotos < 20) {
        myGamePiece.image.src = "images/horse-movements/horse-down3.png";
    } else if (cycleThroughPhotos > 25) {
        cycleThroughPhotos = 0
    }
    myGamePiece.speedY += 1;
    cycleThroughPhotos += 1;
}

function moveleft() {
    if (cycleThroughPhotos <= 5) {
        myGamePiece.image.src = "images/horse-movements/horse-left.png";
    } else if (cycleThroughPhotos < 10) {
        myGamePiece.image.src = "images/horse-movements/horse-left1.png";
    } else if (cycleThroughPhotos < 15) {
        myGamePiece.image.src = "images/horse-movements/horse-left2.png";
    } else if (cycleThroughPhotos < 20) {
        myGamePiece.image.src = "images/horse-movements/horse-left3.png";
    } else if (cycleThroughPhotos > 25) {
        cycleThroughPhotos = 0;
    }
    myGamePiece.speedX -= 1;
    cycleThroughPhotos += 1;
}

function moveright() {
    if (cycleThroughPhotos <= 5) {
        myGamePiece.image.src = "images/horse-movements/horse-right.png";
    } else if (cycleThroughPhotos < 10) {
        myGamePiece.image.src = "images/horse-movements/horse-right1.png";
    } else if (cycleThroughPhotos < 15) {
        myGamePiece.image.src = "images/horse-movements/horse-right2.png";
    } else if (cycleThroughPhotos < 20) {
        myGamePiece.image.src = "images/horse-movements/horse-right3.png";
    } else if (cycleThroughPhotos > 25) {
        cycleThroughPhotos = 0;
    }
    myGamePiece.speedX += 1;
    cycleThroughPhotos += 1;
}
