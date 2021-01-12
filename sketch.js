
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const MouseConstraint = Matter.MouseConstraint;
const Mouse = Matter.Mouse

var world,engine,canvas;
var pendulum1,pendulum2,pendulum3,pendulum4,pendulum5;
var roof;
var sling1,sling2,sling3,sling4,sling5;
var mConstraint;

function preload()
{
	
}

function setup() {
  canvas = createCanvas(1600,800);
	engine = Engine.create();
  world = engine.world;
  
  let canvasMouse = Mouse.create(canvas.elt);
  canvasMouse.pixelRatio = pixelDensity();
  let options ={
    mouse: canvasMouse
  };

  mConstraint = MouseConstraint.create(engine,options);
  World.add(world,mConstraint)
  Engine.run(engine);

  pendulum1 = new Pendulum(340,450,"#00b0ff");
  pendulum2 = new Pendulum(400,450,"#f20b97");
  pendulum3 = new Pendulum(460,450,"#a4de02");
  pendulum4 = new Pendulum(520,450,"#ff0000");
  pendulum5 = new Pendulum(580,450,"#f9b700");

  sling1 = new Sling(pendulum1.body,{x:340,y:200});
  sling2 = new Sling(pendulum2.body,{x:400,y:200});
  sling3 = new Sling(pendulum3.body,{x:460,y:200});
  sling4 = new Sling(pendulum4.body,{x:520,y:200});
  sling5 = new Sling(pendulum5.body,{x:580,y:200});
}


function draw() {
  rectMode(CENTER);
  background("YELLOW"); 
  Engine.update(engine);
  
  sling1.display();
  pendulum1.display();
  sling2.display();
  pendulum2.display();
  sling3.display();
  pendulum3.display();
  sling4.display();
  pendulum4.display();
  sling5.display();
  pendulum5.display();
  drawSprites();
}

// function keyPressed() {
//   if (keyCode === UP_ARROW) {

//     Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});

//   }
// }