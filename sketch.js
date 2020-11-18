
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var tree,treeImage;
var ground,Stone;
var boy,boyIm;
var rope1;
function preload()
{
	treeImage=loadImage("tree.png")
boyIm=loadImage("boy.png")
}

function setup() {
	createCanvas(850, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
tree=createSprite(650,320,50,50);
tree.addImage(treeImage);
tree.scale=0.3;

ground=createSprite(width/2,500,850,10);
	Engine.run(engine);
	Stone=new stone(200,380,50,50)
	
	boy=createSprite(200,430,50,50);
boy.addImage(boyIm);
  boy.scale=0.09;

  rope1=new rope(boy.body,Stone.body)
}


function draw() {
  rectMode(CENTER);
  background(0);
  Stone.display();
  rope1.display();
  drawSprites();
 
}



