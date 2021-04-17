
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var box1,box2,box3,box4,box5,box6
var ground,platform
var hex, slingShot;

function preload() {
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(840,320,70,70);
    box3 = new Box(980,320,70,70);
    box4 = new Box(770,240,70,70);
    box5 = new Box(910,240,70,70);
    box6 = new Box (840,120,70,70)
    hex = Bodies.circle(50,200,20);
    slingShot = new SlingShot(hex.body,{x:200,y:50});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();


    box3.display();
    box4.display();


    box5.display();
    box6.display()
    hex.display();
    platform.display();

    slingShot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(hex.body,{x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingShot.fly();
}
function keyPressed(){
    if(keyCode===32){
        slingShot.attach(hex.body)
    }
}