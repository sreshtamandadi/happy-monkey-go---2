var backImage,back;
var player, player_running;
var ground,ground_img;

var foodGroup, bananaImage;
var obstaclesGroup,obstacle_img;

var gameOver;
var score=0;




function preload(){
  backImage=loadImage("jungle.jpg");
  player_running =
loadAnimation ("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  bananaImage = loadImage("Banana.png");
  obstacleImage = loadImage("stone.png");
  
}


function setup() {
  createCanvas(600,300);
  
  
  
  player=createSprite(100,290,20,50);
  player.addAnimation("Running",player_running);
  player.scale =0.1;
  
  ground =createSprite(400,290,800,10);
  ground.velocityX=-4;
  ground. x=ground.width/2;
  ground.visible=true;
  
  back=createSprite(0,0,800,400);
  back.addImage(backImage);
  back.scale=1.5;
  back.x=ground.width/2;
  back.velocityX=-4;

  foodGroup = new Group();
  obstaclesGroup = new Group();
  
  score = 0;
  
 
}


function draw(){
 background(255);
  
  if(ground.x<=0){
    ground.x=ground.width/2;
  }
  
  if(back.x<100){
    back.x=back.width/2;
  }
  
  if(foodGroup.isTouching(player)){
    foodGroup.destroyEach();
  score= score+ 1;
  }
  switch(score){
    case 10: player.scale=0.12;
          break;
    case 20: player.scale=0.14;
          break;
    case 30: player.scale=0.16
          break;
    case 40: player.scale=0.18
          break;
    case 50: player.scale=0.24 
          break;
    default: break;
  }
  
  if (keyDown("space")){
    player.velocityY = -14;
  }
  player.velocityY = player.velocityY +0.8;
  
  spawnFood();
  spawnobstacles();
  
  if (obstaclesGroup.isTouching(player)){
    player.scale=0.07   
  }
  player.collide(ground); 
  drawSprites();
   stroke("white");
  textSize(20);
  text("score "+ score,500,50);
  }
  
  


 function spawnFood(){
   if (frameCount % 80 === 0){
     var banana = createSprite(600,250,40,10);
     banana.y = random(120,200);
     banana.addImage(bananaImage);
     banana.scale = 0.05;
     banana.velocityX = -5;
     banana.lifetime = 400;
     player.depth = banana.depth + 1;
     foodGroup.add(banana);
     }
 }
   
   function spawnobstacles (){
     if (frameCount % 300 === 0){
       var obstacle = createSprite(800,290,10,40)
       obstacle.velocityX = -6;
       obstacle.addImage(obstacleImage);
       obstacle.scale= 0.1;
       obstacle.lifetime = 300;
       obstaclesGroup.add(obstacle);
       }
   }
