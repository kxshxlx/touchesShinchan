var SPACE,R,lArrow,rArrow,uArrow,dArrow,leftImage,
rightImage,upImage,downImage;
var verticle_border,verticle_border1;
var horizontal_border,horizontal_border1; 
var horizontal_black,verticle_black;
var shinchan, shinchanImage;
var chocochips, chocochipImage; 
var capsicum, capsicumImage;
var capsicum1;
var capsicum2;
var capsicum3;
var paradiseking, paradiseImage; 
var paradiseking2;
var higure, higureImage; 
var higure2;
var bars, bars_Image;
var gameState = "serve";

var horizontalB1,horizontalB2, horizontalB3, horizontalB4, horizontalB5;
var verticleB1, verticleB2, verticleB3, verticleB4, verticleB5, verticleB6;


// verticle_border, verticle_border1, horizontal_border, horizontal_border1

function preload(){
  shinchanImage = loadImage("shinchan.png");
  paradiseImage = loadImage("paradise.png");
  higureImage = loadImage("higure.png");
  chocochipImage = loadImage("choco.jpg")
  rightImage = loadImage("right.png");
  leftImage = loadImage("left.png");
  upImage = loadImage("up.png");
  downImage = loadImage("down.png");
  capsicumImage = loadImage("cap.png");
  shinchanS = loadSound("gaana.mp3");
  
}
function setup(){
  SPACE=createSprite(350,100,60,20);
  SPACE.shapeColor = "green";
  R=createSprite(350,200,60,20);
  R.shapeColor = "green";
  
  lArrow = createSprite(60,350,10,10);
lArrow.addImage(leftImage);
lArrow.scale = 0.2;
  
  rArrow = createSprite(140,350,10,10);
rArrow.addImage(rightImage);
rArrow.scale = 0.2;
  
  uArrow = createSprite(260,350,10,10);
uArrow.addImage(upImage);
uArrow.scale = 0.2;
  
  dArrow = createSprite(340,350,10,10);
dArrow.addImage(downImage);
dArrow.scale = 0.2;
 
horizontal_black = createSprite(1,150,600,2);
horizontal_black.shapeColor = "black";

verticle_black = createSprite(150,1,2,600);
verticle_black.shapeColor = "black";

  upper_vertical_line = createSprite(150,1,2,80);
upper_vertical_line.shapeColor = "red";
  
  vertical_line = createSprite(150,140,2,120);
vertical_line.shapeColor = "red";
  
  lower_vertical_line = createSprite(150,270,2,65);
lower_vertical_line.shapeColor = "red";
  
  horizontal_line = createSprite(3,150,520,2);
horizontal_line.shapeColor = "red";

  shinchan = createSprite(20,20,5,5);
shinchan.addImage(shinchanImage);
shinchan.scale = 0.08;
  
  chocochips = createSprite(20,280,10,10);
  chocochips.addImage(chocochipImage);
chocochips.scale = 0.2;
  
  capsicum = createSprite(150,150,600,10);
capsicum.addImage(capsicumImage);
capsicum.scale = 0.2;
  
  capsicum1 = createSprite(150,150,600,10);
capsicum1.addImage(capsicumImage);
capsicum1.scale = 0.2;
  
  capsicum2 = createSprite(150,150,600,10);
capsicum2.addImage(capsicumImage);
capsicum2.scale = 0.2;
  
  capsicum3 = createSprite(150,150,600,10);
  capsicum3.addImage(capsicumImage);
capsicum3.scale = 0.2;
  
  paradiseking = createSprite(75,75,20,20);
paradiseking.addImage(paradiseImage);
paradiseking.scale = 0.1;
  
  paradiseking2 = createSprite(225,225,20,20);
paradiseking2.addImage(paradiseImage);
paradiseking2.scale = 0.1;
  
  higure = createSprite(225,75,20,20);
higure.addImage(higureImage);
higure.scale = 0.1;
  
  higure2 = createSprite(75,225,20,20);
  higure2.addImage(higureImage);
  higure2.scale = 0.1;

  horizontalB1 = createSprite(250,1,100,2);
  horizontalB2 = createSprite(250,25,100,2);
  horizontalB3 = createSprite(250,50,100,2);
  horizontalB4 = createSprite(250,75,100,2);
  horizontalB5 = createSprite(250,100,100,2);

  horizontalB1.visible = false;
  horizontalB2.visible = false;
  horizontalB3.visible = false;
  horizontalB4.visible = false;
  horizontalB5.visible = false;

  verticleB1 = createSprite(200,50,2,100);
  verticleB2 = createSprite(220,50,2,100);
  verticleB3 = createSprite(240,50,2,100);
  verticleB4 = createSprite(260,50,2,100);
  verticleB5 = createSprite(280,50,2,100);
  verticleB6 = createSprite(300,50,2,100);
  
  verticleB1.visible = false;
  verticleB2.visible = false;
  verticleB3.visible = false;
  verticleB4.visible = false;
  verticleB5.visible = false;
  verticleB6.visible = false;

  verticle_border = createSprite(300,1,1,600);
verticle_border.shapeColor = "blue";
  
  verticle_border1 = createSprite(1,1,1,600);
  verticle_border1.shapeColor = "blue";
  
  horizontal_border = createSprite(1,300,600,1);
horizontal_border.shapeColor = "blue";
  
  horizontal_border1 = createSprite(1,1,600,1);
horizontal_border1.shapeColor = "blue";
}

function draw(){
  background("black");
  fill("white");
  
  
  shinchan.velocityX = 0;
 shinchan.velocityY = 0;
  
  if(gameState === "serve"){
   textSize(20);
   text("PRESS 'SPACE' TO START",20,200);
   textSize(16);
   text("SHINCHAN 'n' HIS CHOCOCHIPS",20,120);
  }
    
    if(mousePressedOver(SPACE)&& gameState === "serve"){
   serve();
   gameState = "play"; 
    shinchanS.play();
    }
    if(touches.length>0 || mousePressedOver(SPACE)) {      
      serve();
      gameState = "play";
      touches = []
    }
    if(gameState === "play"){
      shinchanS.play();
    }
    

    if(shinchan.isTouching(paradiseking)){
      gameState = "end";
      END();
    }

    if(shinchan.isTouching(paradiseking2)){
      gameState = "end";
      END();
    }

    if(shinchan.isTouching(higure)){
      gameState = "end";
      END();
    }

    if(shinchan.isTouching(higure2)){
      gameState = "end";
      END();
    }

    if(shinchan.isTouching(capsicum)){
      gameState = "end";
      END();
    }

    if(shinchan.isTouching(capsicum1)){
      gameState = "end";
      END();
    }

    if(shinchan.isTouching(capsicum2)){
      gameState = "end";
      END();
    }

    if(shinchan.isTouching(capsicum3)){
      gameState = "end";
      END();
    }
    

    if(shinchan.collide(chocochips)){
      gameState = "end";
      END();
      

      paradiseking.x = 220;
      paradiseking.y = 15;
      paradiseking2.x = 260;
      paradiseking2.y = 80;
      higure.x = 230;
      higure.y = 75;
      higure2.x = 255;
      higure2.y = 20;
      capsicum.x = 220;
      capsicum.y = 80;
      capsicum1.x = 270;
      capsicum1.y = 40;
      capsicum2.x = 260;
      capsicum2.y = 30;
      capsicum3.x = 250;
      capsicum3.y = 75;

      horizontalB1.visible = true;
      horizontalB2.visible = true;
      horizontalB3.visible = true;
      horizontalB4.visible = true;
      horizontalB5.visible = true;

      verticleB1.visible = true;
      verticleB2.visible = true;
      verticleB3.visible = true;
      verticleB4.visible = true;
      verticleB5.visible = true;
      verticleB6.visible = true;

    }

    if(mousePressedOver(R) && gameState === "end"){
      shinchanS.stop();
      gameState = "serve";
      positionR();
    }
      if(touches.length>0 || mousePressedOver(R)) {      
        shinchanS.stop();
        gameState = "serve";
        positionR();
        touches = []
      }
      
    

  paradiseking.bounceOff(verticle_border);
  paradiseking.bounceOff(verticle_border1);
  paradiseking.bounceOff(horizontal_border);
  paradiseking.bounceOff(horizontal_border1);
  paradiseking.bounceOff(verticle_black);
  paradiseking.bounceOff(horizontal_black);
  
  paradiseking2.bounceOff(verticle_border);
  paradiseking2.bounceOff(verticle_border1);
  paradiseking2.bounceOff(horizontal_border);
  paradiseking2.bounceOff(horizontal_border1);
  paradiseking2.bounceOff(verticle_black);
  paradiseking2.bounceOff(horizontal_black);
  
  higure.bounceOff(verticle_border);
  higure.bounceOff(verticle_border1);
  higure.bounceOff(horizontal_border);
  higure.bounceOff(horizontal_border1);
  higure.bounceOff(verticle_black);
  higure.bounceOff(horizontal_black);
  
  higure2.bounceOff(verticle_border);
  higure2.bounceOff(verticle_border1);
  higure2.bounceOff(horizontal_border);
  higure2.bounceOff(horizontal_border1);
  higure2.bounceOff(verticle_black);
  higure2.bounceOff(horizontal_black);
  
  capsicum.bounceOff(verticle_border);
  capsicum.bounceOff(verticle_border1);
  capsicum.bounceOff(horizontal_border);
  capsicum.bounceOff(horizontal_border1);
    
  capsicum1.bounceOff(verticle_border);
  capsicum1.bounceOff(verticle_border1);
  capsicum1.bounceOff(horizontal_border);
  capsicum1.bounceOff(horizontal_border1);
  
  capsicum2.bounceOff(verticle_border);
  capsicum2.bounceOff(verticle_border1);
  capsicum2.bounceOff(horizontal_border);
  capsicum2.bounceOff(horizontal_border1);
  
  capsicum3.bounceOff(verticle_border);
  capsicum3.bounceOff(verticle_border1);
  capsicum3.bounceOff(horizontal_border);
  capsicum3.bounceOff(horizontal_border1);

  shinchan.bounceOff(verticle_border);
  shinchan.bounceOff(verticle_border1);
  shinchan.bounceOff(horizontal_border);
  shinchan.bounceOff(horizontal_border1);
  shinchan.bounceOff(upper_vertical_line);
  shinchan.bounceOff(lower_vertical_line)
  shinchan.bounceOff(vertical_line);
  shinchan.bounceOff(horizontal_line);
  
  if(mousePressedOver(lArrow)&& gameState === "play"){
    shinchan.velocityX= -5;
  }
  if(touches.length>0 || mousePressedOver(lArrow)) {      
    shinchan.velocityX= -5;
    touches = []
  }
  
  if(mousePressedOver(rArrow)&& gameState === "play"){
    shinchan.velocityX= +5;
  }
  if(touches.length>0 || mousePressedOver(rArrow)) {      
    shinchan.velocityX= +5;
    touches = []
  }
  
  if(mousePressedOver(uArrow)&& gameState === "play"){
    shinchan.velocityY= -5;
  }
  if(touches.length>0 || mousePressedOver(uArrow)) {      
    shinchan.velocityY= -5;
    touches = []
  }
  
  if(mousePressedOver(dArrow)&& gameState === "play"){
    shinchan.velocityY= +5;
  }
  if(touches.length>0 || mousePressedOver(dArrow)) {      
    shinchan.velocityY= +5;
    touches = []
  }
  
  drawSprites();
 textSize(12);
  text("SPACE",330,105);
  text("RESTART",325,205);

  if(shinchan.collide(chocochips)&& gameState === "end"){
    fill("Blue");
    textSize(16);
      text("YOU WIN",120,120);
      textSize(16);
      text("Click 'RESTART' To Play Again",30,220);
  }

  else if(gameState === "end"){
    fill("red");
    textSize(16);
    text("YOU LOSE",118,120);
    textSize(16);
    text("Click 'RESTART' To Retry",50,220);
  }
}
function serve() {
  capsicum.velocityX = 2.5;
  capsicum.velocityY = 0;
  capsicum1.velocityX = -2.5;
  capsicum1.velocityY = 0;
  capsicum2.velocityX = 0;
  capsicum2.velocityY = 2.5;
  capsicum3.velocityX = 0;
  capsicum3.velocityY = -2.5;
  paradiseking.velocityX = 2;
  paradiseking.velocityY = 1;
  paradiseking2.velocityX = -2;
  paradiseking2.velocityY = -1;
  higure.velocityX = -2;
  higure.velocityY = 1;
  higure2.velocityX = 2;
  higure2.velocityY = -1;
  
}
function END(){
  capsicum.velocityX = 0;
  capsicum.velocityY = 0;
  capsicum1.velocityX = 0;
  capsicum1.velocityY = 0;
  capsicum2.velocityX = 0;
  capsicum2.velocityY = 0;
  capsicum3.velocityX = 0;
  capsicum3.velocityY = 0;
  paradiseking.velocityX = 0;
  paradiseking.velocityY = 0;
  paradiseking2.velocityX = 0;
  paradiseking2.velocityY = 0;
  higure.velocityX = 0;
  higure.velocityY = 0;
  higure2.velocityX = 0;
  higure2.velocityY = 0;
}
function positionR(){
  paradiseking.x = 75;
  paradiseking.y = 75;
  paradiseking2.x = 225;
  paradiseking2.y = 225;
  higure.x = 75;
  higure.y = 225;
  higure2.x = 225;
  higure2.y = 75;
  capsicum.x = 150;
  capsicum.y = 150;
  capsicum1.x = 150;
  capsicum1.y = 150;
  capsicum2.x = 150;
  capsicum2.y = 150;
  capsicum3.x = 150;
  capsicum3.y = 150;
  shinchan.x = 20;
  shinchan.y = 20;
}