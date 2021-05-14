var bullet,wall;
var speed,weight;
var thickness ,damage;


function setup() {

  createCanvas(1600,400);
  
  
  wall = createSprite(1000,200,5,5)
  bullet = createSprite(50, 200, 50, 5);

  wall.shapeColor=color(80,80,80)
  
   

}

function draw() {
  background("black"); 
  if(keyWentDown("space")){
    speed = random (100, 300);
  weight= random (30,52);
  thickness = random (22,83);
  bullet.x = 50;
    bullet.y = 200;
    bullet.velocityX = speed ;
    damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness)
  }
  
  wall.height = thickness;
  wall.width = weight/2;
  if(hasColided(bullet , wall)){
bullet.velocityX=0

if(damage>10 && damage < 13){
wall.shapeColor=("yellow");
}

else if(damage<10){
wall.shapeColor=color(0,255,0)
}

else if(damage > 10){
  wall.shapeColor = color(255,0,0);
}
  }
  
  drawSprites();
}
function hasColided (lbullet , lwall ) {
bulletRightEdge = lbullet.x + lbullet.width ;
wallLeftEdge = lwall.x;
if (bulletRightEdge>=wallLeftEdge)
{
  return true
}
}