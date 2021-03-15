
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const cons = Matter.Constraint;
var treeObj, stoneObj, groundObject, launcherObject;
var mango1;
var world, boy;

function preload() {
	boy = loadImage("images/boy.png");
}

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	stone1 = new Stone(240, 400, 25)

	mango1 = new mango(700, 100, 30);
	mango2=new mango(855,295,35);
	mango3=new mango(670,260,35);
	mango4=new mango(730,200,35);
	mango5=new mango(710,300,36);
	
	treeObj = new tree(775, 650 );

	ground1 = new ground(width / 2, 600, width, 20);

	slingshot = new Slingshot(stone1.body, { x: 240, y: 400})

	Engine.run(engine);

}

function draw() {

	background(230);
	fill("black");
	textSize(18);
	text("- Press space to get more chances -", 50, 50);
	image(boy, 200, 340, 200, 300);

	treeObj.display();
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();

	ground1.display();

	stone1.display();

	slingshot.display();
}

function mouseDragged(){
	Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	slingshot.fly();
}