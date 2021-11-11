const World = Matter.World
const Bodies = Matter.Bodies
const Engine = Matter.Engine
const Body = Matter.Body

var engine, world
var bgImg
var snow = []
var maxSnow = 200

function preload(){
  bgImg = loadImage("snow3.jpg")
}
function setup() {
  createCanvas(800,400);
  engine = Engine.create()
  world = engine.world
  

  if(frameCount % 150 === 0){
    for(var i = 0; i<maxSnow; i++){
      snow.push( new Snow(random(0,700), random(0,10)))
      
    }
  }
  
  
}

function draw() {
  background(bgImg);
  Engine.update(engine)  

  for(var i = 0; i<maxSnow; i++){
    snow[i].display()
    snow[i].updateY()
  }

  
  
}