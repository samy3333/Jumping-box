var canvas;
var music;
var s1, s2, s3, s4;
var box;
var e1, e2, e3;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
   s1= createSprite(100, 500, 200, 20);
   s1.shapeColor= "red";

   s2= createSprite(300, 500, 200, 20);
   s2.shapeColor= "blue";

   s3= createSprite(500, 500, 200, 20);
   s3.shapeColor= "yellow";

   s4= createSprite(700, 500, 200, 20);
   s4.shapeColor= "orange";


    //create box sprite and give velocity
   box= createSprite(Math.round(random(20, 750)), 200, 20, 20);
   box.velocityY= -5;
   box.velocityX= Math.round(random(-3, 3));
   box.shapeColor= "white";    

   e1= createSprite(10, 250, 5, 450);
  e1.shapeColor= rgb(169,169,169);

  e2= createSprite(790, 250, 5, 450);
  e2.shapeColor= rgb(169,169,169);

  e3= createSprite(400, 10, 800, 5);
  e3.shapeColor= rgb(169,169,169);
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
  
    if(e1.isTouching(box)){
        box.bounceOff(e1);
    }

    if(e2.isTouching(box)){
        box.bounceOff(e2);
    }

    if(e3.isTouching(box)){
        box.bounceOff(e3);
    }
  
  //add condition to check if box touching surface and make it box
if(s1.isTouching(box)){
    box.velocityY= 0;
    box.velocityX= 0;
    box.shapeColor= "red";
    box.bounceOff(s1);
    music.stop();
}

if(s2.isTouching(box)){
    box.bounceOff;
    box.shapeColor= "blue";
    box.bounceOff(s2);
    music.stop();
}

if(s3.isTouching(box)){
   music.loop();
    box.shapeColor= "yellow";
    box.bounceOff(s3);
}

if(s4.isTouching(box)){
    box.shapeColor= "orange";
    box.bounceOff(s4);
    
}

  drawSprites();
}
