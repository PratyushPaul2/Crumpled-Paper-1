
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1,box2,box3,ball;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;
	
	box1=createSprite(900,640,20,100);
	box2=createSprite(1100,640,20,100);
	box3=createSprite(1000,680,200,20);

	 var options={
		 
		isStatic: false,
		restitution: 0.3,
		friction: 0.5,
		density: 1.2
	 }
fill("white");
ball=Matter.Bodies.circle(100,650,30,options);
	
	
	


	Engine.run(engine);
  
}



function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,30);

  drawSprites();
 
}

function keyPressed(){
if(keyCode===UP_ARROW){
	Matter.Body.applyForce(ball,ball.position,{x:85,y:-85});
}

}



