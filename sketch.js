var bruno;
var brunoImg;
var invisibleGround;

var score =  0;

function preload(){

}

function setup() {
  createCanvas(800,400);
  bruno = createSprite(400, 200, 50, 50);

  invisibleGround = createSprite(400,390,600,10);
  invisibleGround.visible = false;

  score = 0;
}

function draw() {
  background("green");  

  if(keyDown("space") && bruno.y >= 159) {
    bruno.velocityY = -12;
  }
  bruno.velocityY = bruno.velocityY + 0.8

  bruno.collide(invisibleGround);
  

  drawSprites();
}

