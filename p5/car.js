// Variabler för din bil
let carX = 200;
let carY = 300;
let carWidth = 35;
let carHeight = 60;
let carSpeed = 5;

// Variabler för mötande bil
let enemyX = 100;
let enemyY = -60;
let enemyWidth = 35;
let enemyHeight = 60;
let enemySpeed = 4;

// Speltillstånd och poäng
let gameState = "PLAY"; // Kan vara "PLAY" eller "GAMEOVER"
let score = 0;

function setup() {
  createCanvas(300, 400);
  // Slumpa startposition för första mötande bilen
  enemyX = random(40, width - 40 - enemyWidth);
}

function draw() {
  background(50); // Mörkgrå asfalt

  // --- RITA VÄGEN (syns alltid) ---
  noStroke();
  fill('forestgreen');
  rect(0, 0, 40, height);           // Vänster gräskant
  rect(width - 40, 0, 40, height);  // Höger gräskant

  fill('white');
  rect(width / 2 - 3, 0, 6, height); // Mittlinje

  if (gameState === "PLAY") {
    // --- 1. STYR DIN BIL ---
    if (keyIsDown(LEFT_ARROW)) {
      carX = carX - carSpeed;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      carX = carX + carSpeed;
    }
    // Håll bilen kvar på asfalten
    carX = constrain(carX, 40, width - 40 - carWidth);

    // --- 2. FLYTTA MÖTANDE BIL ---
    enemyY = enemyY + enemySpeed;

    // Om bilen åker utanför botten: ge poäng och börja om längst upp
    if (enemyY > height) {
      score = score + 1;
      enemyY = -enemyHeight;
      enemyX = random(40, width - 40 - enemyWidth);
    }

    // --- 3. KOLLA KOLLISION ---
    if (
      carX < enemyX + enemyWidth &&
      carX + carWidth > enemyX &&
      carY < enemyY + enemyHeight &&
      carY + carHeight > enemyY
    ) {
      gameState = "GAMEOVER";
    }

    // --- 4. RITA BILARNA ---
    fill('crimson');
    rect(carX, carY, carWidth, carHeight, 5);

    fill('dodgerblue');
    rect(enemyX, enemyY, enemyWidth, enemyHeight, 5);

    // --- 5. RITA POÄNG ---
    fill('white');
    textSize(20);
    textAlign(LEFT);
    text("Poäng: " + score, 50, 30);

  } else if (gameState === "GAMEOVER") {
    // --- GAME OVER-SKÄRM ---
    fill('rgba(0, 0, 0, 0.7)');
    rect(0, 0, width, height);

    fill('white');
    textSize(32);
    textAlign(CENTER);
    text("GAME OVER", width / 2, height / 2 - 30);
    
    textSize(20);
    text("Slutpoäng: " + score, width / 2, height / 2 + 10);

    textSize(14);
    text("Klicka med musen för att spela igen", width / 2, height / 2 + 50);
  }
}

// Starta om spelet vid musklick
function mousePressed() {
  if (gameState === "GAMEOVER") {
    score = 0;
    enemyY = -enemyHeight;
    enemyX = random(40, width - 40 - enemyWidth);
    carX = 200; // Ställ tillbaka spelarens bil
    gameState = "PLAY";
  }
}