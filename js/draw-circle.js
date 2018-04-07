let canvas = document.getElementById("canvas");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

let context = canvas.getContext("2d");
context.translate(0.5, 0.5);

let draw = true;

const addRandomCircle = function (e) {
  const radius = Math.random() * 40 + 1;
  addCircle(e.clientX, e.clientY, radius);
};

const addCircle = function (x, y, r) {
  context.beginPath();
  context.arc(x, y, r, 0, 2 * Math.PI);
  context.stroke();
};

const onMouseClick = function (e) {
  draw = !draw;
};

const onMouseMove = function (e) {
  if (draw) {
    addRandomCircle(e);
  }
};

const onKeyDown = function (e) {
  if (e.keyCode === 32) {
    context.clearRect(0, 0, canvas.width, canvas.height);
  }
};

canvas.addEventListener('click', onMouseClick, false);
canvas.addEventListener('mousemove', onMouseMove, false);
canvas.addEventListener('keydown', onKeyDown, false);