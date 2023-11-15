const canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
const CW = canvas.width;
const CH = canvas.height;

let x = CW / 2;
let y = CH / 2;
let r = 20;
let fillColor = "rgb(255,255,255)";
let strokeColor = "orange";
let lineSize = 5;
let startA = 0;
let endA = Math.PI * 2;
let PI = Math.PI;
let run = false;
let red = 127;
let green = 0;
let blue = 0;

function reset() {
  x = CW / 2;
  y = CH / 2;
}

let add = 1;
function color(arg) {
  arg += add;
  if (arg > 255 || arg < 0) {
    add = -add;
  }
  return arg;
}

function drawRect(x, y, w, h, color = "white") {
  ctx.beginPath();
  ctx.fillStyle = color;
  ctx.rect(x, y, w, h);
  ctx.fill();
}

function drawCircle(x, y, r, startA, endA) {
  ctx.beginPath();
  ctx.fillStyle = fillColor;
  ctx.arc(x, y, r, startA, endA);
  ctx.fill();
}

let xSpeed = 1;
let ySpeed = 1;
function moveBall() {
  if (run) {
    x += xSpeed;
    y += ySpeed;
  }
  if (x > CW || x < 0) {
    xSpeed = -xSpeed;
  }
  if (y > CH || y < 0) {
    ySpeed = -ySpeed;
  }
  drawCircle(x, y, r, startA, endA, "blue");
}

function animationLoop() {
  red = color(red);
  fillColor = `rgb(${red},${red},${red})`;
  console.log(fillColor);
  moveBall();

  requestAnimationFrame(animationLoop);
}
animationLoop();

function runToggle() {
  run = !run;
}
