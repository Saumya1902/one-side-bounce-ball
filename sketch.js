var ball,img,paddle;
function preload() {
  /* preload your images here of the ball and the paddle */
  ball=loadImage("ball.png");
  paddle=loadImage("paddle.png");
}
function setup() {
  createCanvas(400, 400);
   /* create the Ball Sprite and the Paddle Sprite */
  ball=createSprite(350,200);
  ball.addAnimation("ball.png");
  ball.scale=0.2;
  ball.shapeColor="black";
  ball.velocityX=6;
  ball.velocityY=7;
  
  paddle=createSprite(370,200,10,70);
  paddle.addAnimation("paddle.png");
  paddle.shapeColor="purple";
  
  }

function draw() {
  background("lightblue");
  /* create Edge Sprites here */
  edges=createEdgeSprites();
  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
  ball.bounceOff(edges[0]);
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  ball.bounceOff(paddle);
  /* Allow the ball to bounceoff from the paddle */
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
 
  /* Prevent the paddle from going out of the edges */ if (ball.x<0||ball.x>400) {
    ball.x = 350;
    ball.y = 200;
    ball.velocityX=0;
    ball.velocityY=0;
  }
  
  if(keyDown(UP_ARROW))
  {paddle.y=paddle.y-20;
     /* what should happen when you press the UP Arrow Key */
  }
  
  if(keyDown("space")){
    ball.velocityX=-5; 
    ball.velocityY=7;
  }
  
 if(keyDown(DOWN_ARROW))
  {paddle.y=paddle.y+20;
    /* what should happen when you press the DOWN Arrow Key */
  }
   randomVelocity();
  
   drawSprites();
  textSize(17);
  fill("black");
  text("press up and down arrow keys to move the paddle",20,50);
  text("press space to restart",20,30);
  
  }
  
  function randomVelocity()
{
  if(ball.bounceOff(paddle)){
  ball.velocityX=5;
  }
  /* this function gets called when the ball bounces off the paddle */
  /* assign the ball a random vertical velocity, so it bounces off in random direction */
}

