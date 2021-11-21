const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var ball;
let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var Xbutton, Ybutton;
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(200,380,400,40);
  right = new Ground(380,200,40,400);
  left = new Ground(20,200,40,400);
  top_wall = new Ground(200,20,400,40);
  var options = {
    restitution:0.95
  };
  ball = Bodies.circle(200,100,20,options);
  World.add(world,ball);
  rectMode(CENTER);
  ellipseMode(RADIUS);

  Xbutton = createImg("right.png")
  Xbutton.position(230,40)
  Xbutton.size(50,50)
  Xbutton.mouseClicked(Xforce);
  
  Ybutton = createImg("up.png")
  Ybutton.position(20,40)
  Ybutton.size(50,50)
  Ybutton.mouseClicked(Yforce);
}
function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);
  fill ("purple")
 ellipse(ball.position.x, ball.position.y, 20);
}

function Yforce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.005})
}

function Xforce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.005,y:0})
}