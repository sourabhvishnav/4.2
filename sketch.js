const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;
var box11,box12,box13;
var slingShot;
var ground,ground2;
var shoter;

function setup(){
    var canvas = createCanvas(600,400);
    engine = Engine.create();
    world = engine.world;

   box1 = new Box(397,215,55,30);
   box2 = new Box(450,215,55,30);
   box3 = new Box(397,165,55,30);
   box4 = new Box(450,165,55,30);
   box5 = new Box(397,115,55,30);
   box6 = new Box(450,115,55,30);
   box7 = new Box(405,95,30,30);
   box8 = new Box(445,95,30,30);   
 
   ground = new Ground(300,height,600,2);
   ground2 = new Ground(430,220,180,2);

   box9 = new Box(380,100,15,45);

   shoter = new Shoter(100,250,35,35);

    slingShot = new SlingShot(shoter.body,{x:100 , y:250});
}

function draw(){
    background(125);
    Engine.update(engine);
    strokeWeight(4);
     
    box1.color="red";
    box2.color="purple";
    box3.color="orange";  
    box4.color="green";  
    box5.color="blue";  
    box6.color="tan";
    box7.color="yellow";  
    box8.color="white";    
             
   

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();

    ground.display();
    ground2.display();

    shoter.display();
    slingShot.display(); 

   
}
 function mouseDragged(){
     Matter.Body.setPosition(shoter.body ,{x:mouseX,y:mouseY});
 }
 
 function mouseReleased(){
     slingShot.fly();
 }