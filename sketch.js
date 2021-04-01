const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var particles=[]
var divisions=[]
var plinkos=[]

var divisionHeight=300 
          



function setup() {
  createCanvas(480,800);
  engine = Engine.create();
	world = engine.world;


  ground1= new Ground(480,780,1000,10)

  for(var d = 0; d <=width; d = d + 80) {
    divisions.push(new Divisions(d,height-divisionHeight/2-25,10,divisionHeight))
    
  }
  for(var p = 40; p <=width; p = p + 50) {
    plinkos.push(new plinko(p,75,10))
    
  }
  for(var p = 15; p <=width-10; p = p + 50) {
    plinkos.push(new plinko(p,175,10))
    
  }
  for(var p = 40; p <=width; p = p + 50) {
    plinkos.push(new plinko(p,275,10))
    
  }
  for(var p = 15; p <=width-10; p = p + 50) {
    plinkos.push(new plinko(p,375,10))
    
  }
  
  Engine.run(engine);
}

function draw() {
  background(0); 

  
  ground1.display()
  for(var d = 0; d <divisions.length; d ++) {
    divisions[d].display(); 
    
  }
  for(var p = 0; p <plinkos.length; p ++) {
    plinkos[p].display(); 
    
  }
  for(var a = 0; a <particles.length; a ++) {
    particles[a].display(); 
    
  }
  if(frameCount%90===0){
    particles.push(new particle(random(width/2-10,width/2+10),15,15))
 }
}
