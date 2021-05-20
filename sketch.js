var mr, fr;

function setup() {
  createCanvas(1920,1080);

mr = createSprite(250,280,80,30);
mr.shapeColor = "green";
mr.debug = true;

fr = createSprite(200,200,30,80);
fr.shapeColor = "green";
fr.debug = true;

}

function draw() {
  background(155);  

  mr.x = World.mouseX;
  mr.y = World.mouseY;

if(mr.x-fr.x<mr.width/2+fr.width/2
&& fr.x-mr.x<mr.width/2+fr.width/2
&& mr.y-fr.y<mr.height/2+fr.height/2
&& fr.y-mr.y<mr.height/2+fr.height/2){
  mr.shapeColor = "red";
  fr.shapeColor = "red";
}

else{
  mr.shapeColor = "green";
  fr.shapeColor = "green";
}

  drawSprites();
}