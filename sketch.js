var bullet,wall;
var speed,weight;
function setup() {

  speed = random(55,90);
  weight = random(400,1500);

  createCanvas(1500,400);
  bullet = createSprite(50,200, 50, 5);
  bullet.velocityX = speed;

  wall = createSprite(1300,200,60,height/2);

}

function draw() {
  background("black"); 
  
  if(wall.x-bullet.x < (bullet.width+wall.width)/2){
    bullet.velocityX = 0;
    var deformation = 0.5* weight * speed * speed/22509;

    if(deformation < 180 && deformation >100)
    {
      bullet.shapeColor = ("green");
    }

    if(deformation < 100)
    {
      bullet.shapeColor = ("red");
    }
  }
  drawSprites();
}