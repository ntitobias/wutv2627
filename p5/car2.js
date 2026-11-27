// Variabler för din bil
let carX = 320;
let carY = 500;
let carWidth = 35;
let carHeight = 60;
let carSpeed = 5;

// Variabler för mötande bil
let enemyX = 120;
let enemyY = -100;
let enemyWidth = 35;
let enemyHeight = 60;
let enemySpeed = 3;


function setup() {
  createCanvas(400, 600);
}

function draw() {
  background(50); // Mörkgrå asfalt

  // --- RITA VÄGEN ---
  noStroke(); // Tar bort ramen från ojekten
  fill('forestgreen');
  rect(0, 0, 40, height);           // Vänster gräskant
  rect(width - 40, 0, 40, height);  // Höger gräskant

  fill('white');
  rect(width / 2 - 3, 0, 6, height); // Mittlinje

  // --- STYR DIN BIL ---
  if (keyIsDown(LEFT_ARROW)) {
    carX = carX - carSpeed;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    carX = carX + carSpeed;
  }

  // Håll bilen kvar på asfalten
  carX = constrain(carX, 40, width - 40 - carWidth);

  // --- RITA DIN BIL ---
  fill('crimson');
  rect(carX, carY, carWidth, carHeight, 5);

  // Flytta mötande trafik
  enemyY = enemyY + enemySpeed;

  // När bilen hamnar nedanför kanten ska den börja om uppifrån.
  if(enemyY > height){
    enemyY = -enemyHeight;
    enemyX = floor(random(40, width-40));
  }

  // Rita upp mötande trafik
  fill('dodgerblue');
  rect(enemyX, enemyY, enemyWidth, enemyHeight, 3);

  //Kontrollera krock
  if(false){
    fill('yellow');
    textSize(32);
    textAlign(CENTER);
    text("KROCK!", width/2, height/2);
  }

}
