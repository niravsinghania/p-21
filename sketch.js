var canvas;
var music;
var box,box1,box2,box3,box4;
function preload(){
music = loadSound("music.mp3");
}
function setup(){
 canvas = createCanvas(800,600);

box1 = createSprite(100,790,70,10);
box1.shapecolour="red"
box2 = createSprite(300,790,70,10);
box2.shapecolour="blue"
box3= createSprite(500,790,70,10);
box3.shapecolour="green"
box4= createSprite(700,790,70,10);
box4.shapecolour="pink"
box = createSprite(400,400,20,20);
}
function draw() {
 background(rgb(169,169,169));
    
if (box.keyDown("down")) {
 box.velocityY=2   
}
if (box.keyDown("up")) {
    box.velocityY=-2;   
   }
   if (box.keyDown("left")) {
    box.velocityX=-2;   
   }
   if (box.keyDown("right")) {
    box.velocityX=2;   
   }
    if (box.isTouching(box1)) {
    box.shapecolour="red";
    music.play();
        }
if (box.isTouching(box2)) {
box.shapecolour="blue";
music.play();
    }
 if (box.isTouching(box3)) {
    box.shapecolour="green";
    music.play();
  }
  if (box.isTouching(box4)) {
    box.shapecolour="pink";
    music.play();
 }                    
    drawSptrites();
}
