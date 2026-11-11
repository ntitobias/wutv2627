let catX=100;
let catY=100;
let catSize=50;
let catSpeed=2;

let mouseSize=30;
let catched=false;

let gameState="START";

function setup() {
  createCanvas(400, 250);
}

function draw() {
  background(220);

  if(gameState=="START"){
    //Rita upp startsida
    textAlign(CENTER);
    textSize(32);
    text("KATTEN och MUSEN", width/2, 125);
    textSize(16);
    text("Tryck på SPACE för att starta", width/2, 200);
  } else if(gameState=="PLAY"){
    //Spela spelet
    //Tangentborddstyrning
    if(keyIsDown("a")){
      catX=catX-catSpeed;
    }
    if(keyIsDown(RIGHT_ARROW)){
      catX=catX+catSpeed;
    }
    if(keyIsDown(UP_ARROW)){
      catY=catY-catSpeed;
    }
    if(keyIsDown(DOWN_ARROW)){
      catY=catY+catSpeed;
    }
  
    //Kontrollera avståndet mellan mus och katt
    let d = dist(catX, catY, mouseX, mouseY);
  
    //Kontrollera om katten har fångat musen
    if(d<catSize/2+mouseSize/2){
      gameState = "GAMEOVER";
      fill('red');
      circle(mouseX,mouseY,100);
    }
    
    //Rita ut grafiken
    fill("darkgray");
    triangle(catX-catSize/3, catY-catSize/3, catX, catY-catSize/3, catX-catSize/4, catY-3*catSize/4);
    triangle(catX+catSize/3, catY-catSize/3, catX, catY-catSize/3, catX+catSize/4, catY-3*catSize/4);    fill("black");
    circle(catX, catY, catSize);
    fill("red");
    triangle(catX-catSize/6, catY, catX-catSize/12, catY-catSize/8, catX-catSize/3, catY-catSize/6);    

    
    // Musstyrning
    fill('brown');
    circle(mouseX, mouseY, mouseSize);
      
  } else if(gameState == "GAMEOVER"){
    /* Rita upp GameOver-sida med möjlighet 
    att börja om. */
    text("Game Over!!!", width/2, 125);
  }
}

function keyPressed(){
  //Starta spelet när man trycker blanksteg.
  if(keyCode==32){
    gameState="PLAY";
  }
}