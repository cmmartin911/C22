//create engine, world, and bodies
const engine = Matter.Engine;
const world = Matter.World;
const bodies = Matter.Bodies;

var e;
var w; 
var object;
var ground;

function setup() {
  createCanvas(400,400);

   e = engine.create();
   w = e.world;

   var object_options={
    restitution:1
  }

   object = bodies.circle(200,200,40,object_options);

   var ground_options={
     isStatic:true
   }
   ground = bodies.rectangle(200,390,400,10,ground_options);
   world.add(w,ground);
   world.add(w,object);
  }

function draw() {
  background(255,255,255);  
  engine.update(e);
  ellipseMode(RADIUS);
  ellipse(object.position.x,object.position.y,40,40);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,10);
}