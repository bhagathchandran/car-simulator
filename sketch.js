var car;
var wall;
var speed,weight;

function setup() {
   createCanvas(1600,400);
   speed = random(50,90);
   weight = random(400,1500);
  car = createSprite(50, 200, 50, 50);
  car.velocityX = speed;
  car.shapecolor = ("blue")

  wall = createSprite(1300,200,60,height/2);
  wall.shapecolor = ("pink");
}

function draw() {
  background("black");  

  if(wall.x-car.x < (car.width+wall.width/2)){
    car.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/2;
  }
  if(deformation > 180){
    car.shapecolor = (255,0,0)
  }

  if(deformation <180 && deformation >100){
    car.shapecolor = (230,230,0);
  }

  if(deformation <100){
    car.shapecolor = (0,255,0);
  }
  drawSprites();
}