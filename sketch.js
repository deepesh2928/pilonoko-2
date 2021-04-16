const Engine = Matter.Engine;
const  World = Matter.World;
const  Events = Matter.Events;
const  Bodies = Matter.Bodies;

var count=0;
var gameState="start";
var partical;
var plinkos = [];
var divisions = [];

var score=0;


var divisionHeight=300;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }

   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   if(partical!=null){
    partical.display();
    if(partical.body.position.y>700){
      if(partical.body.position.x<300){
        score+=500;
        partical=null;
        if(count>=5){
          gameState="end";
        }
      }else if(partical.body.position.x>301&&partical.body.position.x<600){
        score+=100;
        partical=null;
        if(count>=5){
          gameState="end";
        }
      }else if(partical.body.position.x>601&&partical.body.position.x<800){
        score+=200;
        partical=null;
        if(count>=5){
          gameState="end";
        }
      }
    }
    if(count>=5){
      gameState="end";
    }
    if(gameState==="end"){
      textSize(100);
      text("gameover",200,400)
    }
   }
   textSize(30);
   text("Score : "+score,10,20);
   text("500",20,550);
   text("500",100,550);
   text("500",180,550);
   text("100",260,550);
   text("100",340,550);
   text("100",420,550);
   text("100",500,550);
   text("200",580,550);
   text("200",660,550);
   text("200",740,550);
}

function mousePressed() {

  if(gameState!="end"){
  partical=new Particle(mouseX, 10,10);
  count++;
  }
  
}