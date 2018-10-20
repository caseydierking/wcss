"use strict";var FOOD_LIST=["apple","carrot","hay","pumpkin"];function checkIfNightTime(){var e=(new Date).getHours(),o=18<=e||e<=8,t=document.querySelector("body"),c=t.classList.contains("dark-mode");o&&!c?t.classList.add("dark-mode"):!o&&c&&t.classList.remove("dark-mode")}function changeCursor(e,o){e.classList.add("animated"),e.classList.add("tada"),document.getElementsByClassName("horse")[0].className="horse "+o,setTimeout(function(){e.classList.remove("animated"),e.classList.remove("tada")},1500)}function checkFood(e){return FOOD_LIST.includes(e)}function onHorseMouseDown(e){var o=e.parentElement;checkFood(o.classList[o.classList.length-1])&&o.classList.add("active")}function onHorseMouseUp(e){e.parentElement.classList.remove("active")}window.onload=function(){makePoo()},document.addEventListener("DOMContentLoaded",function(){checkIfNightTime()}),document.addEventListener("DOMContentLoaded",function(e){var o=["audio/Horse-and-carriage-passing-by.mp3","audio/Horse-hooves-sound.mp3","audio/Horse-sound-effect.mp3"],t=o[Math.floor(Math.random()*o.length)],c=document.querySelector("audio");c.volume=.05,c.src=t,c.type="audio/mpeg",c.addEventListener("ended",function(){c.src="audio/bliss.mp3"}),document.onmouseover=function(){c.play()},checkIfNightTime()}),setInterval(checkIfNightTime,3e5),document.querySelector(".dark-mode-btn").addEventListener("click",function(){document.querySelector("body").classList.toggle("dark-mode")});var myGamePiece,makePoo=function(){var e=Math.round(1e4*Math.random()+2e4);setTimeout(function(){makePoo();var e=document.getElementsByClassName("poop")[0],o=window.getComputedStyle(e).getPropertyValue("display");e.style.display="none"===o?"inline":o},e)},cleanUpPoo=function(e){"horse pitchfork"===document.getElementsByClassName("horse")[0].className&&(e.style.display="none")},appleArr=[],cycleThroughPhotos=0;function startGame(){document.getElementById("horse-div").style.display="none",document.getElementById("icon-bar-div").style.display="none",myGameArea.start(),myGamePiece=new component(130,100,"images/horse-movements/horse-all.png",10,120,"image",0,0,250,188);for(var e=10*Math.random(),o=0;o<e;o++){var t=800*Math.random(),c=550*Math.random(),a=new component(100,80,"images/apple.svg",t,c,"image",0,0,250,188);appleArr.push({x:t,y:c,apple:a})}}var myGameArea={canvas:document.createElement("canvas"),start:function(){this.canvas.width=800,this.canvas.height=550,this.context=this.canvas.getContext("2d"),document.getElementById("game-div").appendChild(this.canvas),this.interval=setInterval(updateGameArea,20),window.addEventListener("keydown",function(e){myGameArea.key=e.keyCode}),window.addEventListener("keyup",function(e){myGameArea.key=!1})},clear:function(){this.context.clearRect(0,0,this.canvas.width,this.canvas.height)}};function component(e,o,t,c,a,i,s,h,n,m){"image"==(this.type=i)&&(this.image=new Image,this.image.src=t),this.width=e,this.height=o,this.speedX=0,this.speedY=0,this.x=c,this.y=a,void 0!==s&&(this.cropx=s,this.cropy=h,this.cropwidth=n,this.cropheight=m),this.update=function(){ctx=myGameArea.context,"image"==i?void 0!==s?ctx.drawImage(this.image,this.cropx,this.cropy,this.cropwidth,this.cropheight,this.x,this.y,this.width,this.height):ctx.drawImage(this.image,this.x,this.y,this.width,this.height):(ctx.fillStyle=t,ctx.fillRect(this.x,this.y,this.width,this.height))},this.newPos=function(){var c=this;this.x+=this.speedX,this.y+=this.speedY,appleArr.forEach(function(e,o,t){Math.abs(c.x-e.x)<100&&Math.abs(c.y-e.y)<100&&t.splice(o,1)})}}function updateGameArea(){myGameArea.clear(),myGamePiece.speedX=0,myGamePiece.speedY=0,myGameArea.key&&37==myGameArea.key&&moveleft(),myGameArea.key&&39==myGameArea.key&&moveright(),myGameArea.key&&38==myGameArea.key&&moveup(),myGameArea.key&&40==myGameArea.key&&movedown(),appleArr.forEach(function(e){e.apple.update()}),myGamePiece.newPos(),myGamePiece.update()}function moveup(){myGamePiece.cropy=564,cycleThroughPhotos<=5?myGamePiece.cropx=0:cycleThroughPhotos<10?myGamePiece.cropx=250:cycleThroughPhotos<15?myGamePiece.cropx=500:cycleThroughPhotos<20?myGamePiece.cropx=750:25<cycleThroughPhotos&&(cycleThroughPhotos=0),myGamePiece.speedY-=1,cycleThroughPhotos+=1}function movedown(){myGamePiece.cropy=0,cycleThroughPhotos<=5?myGamePiece.cropx=250:cycleThroughPhotos<10?myGamePiece.cropx=500:cycleThroughPhotos<15?myGamePiece.cropx=750:cycleThroughPhotos<20?myGamePiece.cropx=0:25<cycleThroughPhotos&&(cycleThroughPhotos=0),myGamePiece.speedY+=1,cycleThroughPhotos+=1}function moveleft(){myGamePiece.cropy=188,cycleThroughPhotos<=5?myGamePiece.cropx=250:cycleThroughPhotos<10?myGamePiece.cropx=500:cycleThroughPhotos<15?myGamePiece.cropx=750:cycleThroughPhotos<20?myGamePiece.cropx=0:25<cycleThroughPhotos&&(cycleThroughPhotos=0),myGamePiece.speedX-=1,cycleThroughPhotos+=1}function moveright(){myGamePiece.cropy=376,cycleThroughPhotos<=5?myGamePiece.cropx=0:cycleThroughPhotos<10?myGamePiece.cropx=250:cycleThroughPhotos<15?myGamePiece.cropx=500:cycleThroughPhotos<20?myGamePiece.cropx=750:25<cycleThroughPhotos&&(cycleThroughPhotos=0),myGamePiece.speedX+=1,cycleThroughPhotos+=1}var eyelid=document.getElementById("eyelid");document.body.addEventListener("keydown",function(e){e.preventDefault(),32==e.keyCode&&(setTimeout(function(){eyelid.style.animationName="eyelid"},200),eyelid.style.animationName="")});