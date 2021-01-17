var gameState,playerscore,compscore;
var topside,bottomside,leftside,rightside,middledown,middleup,compmallet,playermallet,compgoal,playergoal;
function setup(){
  topside = createSprite(200,20,400,10);
  topside.shapeColor="white";
  bottomside = createSprite(200,380,400,10);
  bottomside.shapeColor="white";
  rightside = createSprite(20,200,10,400);
  rightside.shapeColor="white";
  leftside = createSprite(380,200,10,400);
  leftside.shapeColor="white";
  middleup = createSprite(200,130,400,10);
  middleup.shapeColor="white";
  middledown = createSprite(200,270,400,10);
  middledown.shapeColor="white";
  compmallet = createSprite(200,60,70,15);
  compmallet.shapeColor="pink";
  playermallet = createSprite(200,340,70,15);
  playermallet.shapeColor="black";
  stirker = createSprite(200,200,10,10);
  stirker.shapeColor="gold";
  playergoal = createSprite(200,40,100,15);
  playergoal.shapeColor="yellow";
  compgoal = createSprite(200,360,100,15);
  compgoal.shapeColor="yellow";
  compscore=0;
  playerscore =0;
  gameState="serve";
}
function draw() {
  background("green");  
  if (gameState === "serve") {
    text("Press Space to Serve",150,180);
  }
    strokeWeight(1);
    stroke("red");
    textSize(20); 
    fill("red");
  text(compscore,30,180);
  text(playerscore,30,225);
  stirker.bounceOff(topside);
  stirker.bounceOff(bottomside);
  stirker.bounceOff(rightside);
  stirker.bounceOff(leftside);
  stirker.bounceOff(playermallet);
  stirker.bounceOff(compmallet);
  playermallet.bounceOff(rightside);
  playermallet.bounceOff(leftside);
  compmallet.collide(rightside);
  compmallet.collide(leftside);
  if (keyDown("space") && gameState === "serve") {
  serve();
  gameState = "play";
  }
  if(stirker.isTouching(compgoal)){
    compscore=compscore+1;
    stirker.x=200;
    stirker.y=200;
    stirker.velocityX=0;
    stirker.velocityY=0;
  }
  if(stirker.isTouching(playergoal)){
    playerscore=playerscore+1;
    stirker.x=200;
    stirker.y=200;
    stirker.velocityX=0;
    stirker.velocityY=0;
  }
  if(keyDown("RIGHT")){
    playermallet.velocityX=4;
    playermallet.velocityY=0;
  }
    if(keyDown("LEFT")){
     playermallet.velocityX=-4;
     playermallet.velocityY=0;
  }
  if(keyDown("a")){
    compmallet.velocityX=-4;
    compmallet.velocityY=0;
  }
  if(keyDown("d")){
    compmallet.velocityX=4;
    compmallet.velocityY=0;
  }
    if(keyDown("space")){
      stirker.velocityX=4;
      stirker.velocityY=5;
    } 

    if(playerscore===5&&compscore<=5){
    text("game over press 'r' to restart",140,170);
    text("player'1'WON",130,190);
    gameState='end';
  }
  if(compscore===5&&playerscore<=5){
    text("game over press 'r' to restart",140,170);
    text("player'2'WON",170,150);
    gameState='end';
  }
  if(keyDown("r")&&gameState==="end"){
  gameState="serve";
  compscore=0;
  playerscore=0;
  reset();

  }

  drawSprites();
  
}
function serve() {
  stirker.velocityX = 3;
  stirker.velocityY = 4;
}
function reset() {
  stirker.x = 200;
  stirker.y = 200;
  stirker.velocityX = 0;
  stirker.velocityY = 0;
}
