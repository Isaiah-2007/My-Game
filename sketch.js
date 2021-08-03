var START=0
var PLAY=1
var END=2
var gameState=START

function preload() {
  bgimg=loadImage("images/Grass-Ground.jpg")
  trackimg=loadAnimation("images/Normal Track.png")
  engineimg=loadImage("images/Train top.jpg")
  //bgimg2=loadImage("bgimg2.jpg")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  track=createSprite(width/2-400,height/2)
  track.addAnimation("Normal",trackimg)
  track1=createSprite(width/2+290,height/2)
  track1.addAnimation("Normal",trackimg)
  eng=createSprite(width/2-400,height/2)
  eng.addImage(engineimg)
  eng.scale=0.8
  //bg=createSprite(400, 200);
  //bg.addImage(bgimg)
}

function draw() {
  background(bgimg); 
  track.velocityX=4;
  track1.velocityX=4;
  if(track.X>width/2){
    track.x=track.width/8
  } 
if(keyDown("RIGHT_ARROW")){
  eng.x=eng.x+8
}
  drawSprites();
}