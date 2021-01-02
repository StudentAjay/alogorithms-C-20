var a, b;

function setup() {
  createCanvas(1200,800);
a=createSprite(500,200,100,30);
a.shapeColor = ("red");
a.velocityX= 4;

b=createSprite(1100,200,30,100);
b.shapeColor = ("red");
b.velocityX = -4;
}

function draw() {
  background(0,0,0);  
  //b.x = mouseX;
  //b.y = mouseY;
  if(b.x-a.x <= b.width/2+a.width/2 &&
    a.x-b.x <= a.width/2+b.width/2 &&
    b.y-a.y <= b.height/2+a.height/2 &&
    a.y-b.y <= a.height/2+b.height/2  )
  {
    a.shapeColor = ("green");
    b.shapeColor = ("green");
    a.velocityX= a.velocityX *(-1);
    b.velocityX = b.velocityX *(-1);
  }
  else{
    a.shapeColor = ("red");
    b.shapeColor = ("red");
  }
  drawSprites();
}