const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var ground, ball;
var canvas;

function setup() {

  canvas = createCanvas(400, 400);

  engine = Engine.create();
  world = engine.world;
  var ground_options = {
    isStatic: true
  }
  ground = Bodies.rectangle(width / 2, height - 20, width, 20, ground_options);
  World.add(world, ground);

  var ball_options = {
    restitution: 0.5
  }
  ball = Bodies.circle(200, 200, 10, ball_options);
  World.add(world, ball);


  console.log(ground);

}

function draw() {
  background(255, 255, 255);
  Engine.update(engine);
  fill("brown");
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, width, 20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 10, 10);

  // drawSprites();
}