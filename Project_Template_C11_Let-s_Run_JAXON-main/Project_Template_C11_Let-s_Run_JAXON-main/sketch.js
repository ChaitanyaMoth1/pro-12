var path,boy,invisibleBoundary1,invisibleBoundary2
var pathImg,boyAnm

function preload()
{
  //pre-load images
  pathImg = loadImage("path.png")
  boyAnm = loadAnimation("Runner-1.png","Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale = 1.2;

  boy = createSprite(100,100,70,90);
  boy.addAnimation(boyAnm);
  boy.scale = 0.6;
  
 invisibleBoundary1 = createSprite(10,200,10,420);
 invisibleBoundary1.visible = false;

 invisibleBoundary2 = createSprite(390,200,10,420);
 invisibleBoundary2,visible = false;
}

function draw() {
  background(blue);
  path.velocityY = 4;

  if(path.y > 400 )
  {
    path.y = height/2;
  }

  boy.collide(invisibleBoundary1);
  boy.collide(invisibleBoundary2);


  boy.x=World.mouseX;
}
