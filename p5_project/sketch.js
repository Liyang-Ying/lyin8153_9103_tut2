function preload() {
  preloadGardenAudio();
}

function setup() {
  createCanvas(400, 400);
  setupGardenAudio();
}

function draw() {
  background(22, 43, 33);

  updateGardenAudio();

  let flowerX = width / 2;
  let flowerY = height / 2;

  noStroke();

  fill(225, 135, 165);
  circle(flowerX - 15, flowerY, 30);
  circle(flowerX + 15, flowerY, 30);
  circle(flowerX, flowerY - 15, 30);
  circle(flowerX, flowerY + 15, 30);

  drawGardenFlowerGlow(flowerX, flowerY, 60);

  fill(245, 200, 90);
  circle(flowerX, flowerY, 18);
}