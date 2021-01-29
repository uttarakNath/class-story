var a,b;

function setup() {
  createCanvas(800,400);

  obj1=createSprite(100,200,50,50);
  obj2=createSprite(200, 200, 50, 50);
  obj3=createSprite(300,200,50,50);
  obj4=createSprite(400,200,50,50);
  b=createSprite(100,100,50,50);

  obj1.shapeColor="green";
  obj2.shapeColor="green";
  obj3.shapeColor="green";
  obj4.shapeColor="green";
  b.shapeColor="red";

  obj2.velocityX=5;
  b.velocityX=5;
}

function draw() {
  background(255,255,255); 
  
  b.x= World.mouseX;
  b.y= World.mouseY;

  if(isTouching(obj1,b)){
    obj1.shapeColor="yellow";
    b.shapeColor="green";
  }
  else{
    obj1.shapeColor="green";
    b.shapeColor="red";
  }
  bounceOff(obj2,b);
  
  drawSprites();
}
function isTouching(a,b){
  if(b.x-a.x<a.width/2+b.width/2 && a.x-b.x<a.width/2+b.width/2
    && b.y-a.y<a.height/2+b.height/2 && a.y-b.y<a.height/2+b.height/2){
     return true;
    }
    else{
    return false;
    }
}