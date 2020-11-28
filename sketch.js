
var monkey , monkey_running;
var bananaImage, obstacleImage;
var bananaGroup, obstacleGroup;
var survivalTime;
var score=0;
var ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  obstacleImage = loadImage("obstacle.png");
  bananaImage = loadImage("banana.png");
 
}



function setup() {
  createCanvas(600, 400);
  
  monkey= createSprite(60,310,10,50);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.18;
  
   ground = createSprite(200,380,4000,40);
  ground.shapeColor="black";
  ground.x = ground.width /2;
  
  survivalTime=0;
  
  
  //create Obstacle and Cloud Groups
  obstacleGroup = createGroup();
  bananaGroup = createGroup();
  
}


function draw() {
  background("turquoise");
 
  stroke("black");
  textSize(20);
  fill("black");
  
  survivalTime=Math.round(frameCount/getFrameRate())
  text("Survival Time: "+ survivalTime,240,50)
    
  ground.velocityX=-5
  
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  monkey.collide(ground);
  
  //jump when the space key is pressed
    if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;    
    }
    
  //add gravity
  monkey.velocityY = monkey.velocityY + 0.8
  
  food();
  obstacles();
  
  
  
  drawSprites();
}

function food(){
   if (frameCount % 80 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.17;
    banana.velocityX = -5;
    
     //assign lifetime to the variable
    banana.lifetime=110;
    
    
    //add each cloud to the group
    bananaGroup.add(banana);
  }
  
}


function obstacles(){
  if (frameCount % 300 === 0){
   var obstacle = createSprite(600,330,10,40);
   obstacle.velocityX = -5;
    obstacle.addImage(obstacleImage);

   
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.18;
    obstacle.lifetime=120;
   
   //add each obstacle to the group
    obstacleGroup.add(obstacle);
 }

  
}



