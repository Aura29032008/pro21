var fixedRect, movingRect, aura1, aura2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  aura1=createSprite(600,500,60,50);
  aura1.shapeColor="pink";
  aura1.debug=true;
  

  aura2=createSprite(600,200,40,90);
  aura2.shapeColor="blue";
  aura2.debug=true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  aura1.velocityY= -2;
  aura2.velocityY= 2;
 

}

function draw() {
  background(0,0,0);  
  bounceOff(movingRect,fixedRect);
  bounceOff(aura1,aura2);
 

 

 
 
  drawSprites();

}

function isTouching() {
  if(movingRect.x - fixedRect.x< fixedRect.width/2 + movingRect.width/2 
    && fixedRect.x - movingRect.x< fixedRect.width/2 + movingRect.width/2
    && movingRect.y - fixedRect.y< fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - movingRect.y< fixedRect.height/2 + movingRect.height/2){
      movingRect.shapeColor= "pink";
      fixedRect.shapeColor= "pink";
    }
    else{
      movingRect.shapeColor="purple";
      fixedRect.shapeColor="purple";
    }
}



