
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1,dustbin1,dustbin2,dustbin3,ground1;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paper1 = new paper(50,610,50,50);
 
	
   
	ground1= new Ground(400,650,800,30);
	dustbin1=new Dustbin(600,625,250,20);
	dustbin2=new Dustbin(480,550,20,165);
     dustbin3= new Dustbin(720,550,20,165);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Matter.Engine.update(engine);
  
  

  
 
  paper1.display();
 

 
 ground1.display();
 dustbin1.display();
 dustbin2.display();
 dustbin3.display();

 keyOk();
  drawSprites();
 
}

function keyOk() {
	 if (keyCode===UP_ARROW){
	 Matter.Body.setPosition(paper1.body,  {x:600,y:580}); }
	 }
