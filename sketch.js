const Engine = Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;

var engine, world;
var ball,ground,ball1;

function setup() {
  createCanvas(800,400);
  engine= Engine.create();
  world=  engine.world;
  ball= new Box(230,100,50,100);
  ball1= new Box(200,200,50,50);
  ground= new Ground(400,380,800,20);
  
}

function draw() {
  background(0);  
  Engine.update(engine);
  ball.display();
  ball1.display();
  ground.display();
}