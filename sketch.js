
var trex ,trex_running;
var ground;
var groundImage;
function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage=loadImage("ground2.png");

}

function setup(){
  createCanvas(600,200)
  
  trex = createSprite(50, 150, 10, 10);
trex.addAnimation("animation",trex_running);
ground=createSprite(300, 190, 2000, 20);
ground.addImage(groundImage);
ground.velocityX=-5;
 
}

function draw(){
  background("white");
  if(keyDown("space")){
    trex.velocityY=-5;
  }
  if(ground.x<0){
    ground.x=ground.width/2;
  }

  trex.velocityY+=0.2;
  
  trex.collide(ground);
  drawSprites();

}
