var box ; 
var edges;
function setup() {
  createCanvas(500,500);
  box = createSprite (200,200,40,40);
  edges=createEdgeSprites ()
}

function draw() 
{
  background(30);
  if (keyDown (RIGHT_ARROW)){
    box.x=box.x +5 ;
  }
  if (keyDown (LEFT_ARROW)){
    box.x=box.x -5 ;
  }
  if (keyDown (UP_ARROW)){
    box.y=box.y -5 ;
  }
  if (keyDown (DOWN_ARROW)){
    box.y=box.y +5 ;
  }
   box.bounceOff(edges)

  

  drawSprites();

}




