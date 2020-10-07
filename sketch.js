var movingRect,fixedRect

function setup() {
  createCanvas(1200,800);
  movingRect = createSprite(400, 200, 50, 50);
  movingRect.shapeColor = "green"
 movingRect.velocityX = -3

 ob1 = createSprite(300,200,30,30)
 ob1.shapeColor= "red"
 ob1.velocityY = -3
ob2 = createSprite(300,100,30,30)
ob2.shapeColor="pink"
ob2.velocityY = 3

  fixedRect = createSprite(200,200,50,50)
  fixedRect.shapeColor = "blue"
  fixedRect.velocityX = 3
}

function draw() {
  background(255,255,255);  
 bounce(ob1,ob2)
 bounce(movingRect,fixedRect)
  //movingRect.x = World.mouseX
  //movingRect.y = World.mouseY

  
  drawSprites();
}
