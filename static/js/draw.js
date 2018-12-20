(function () {
  let canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    isDrawing = true,
    currentFunc = 0;

  function toggleIsDrawing() {
    isDrawing = !isDrawing;
  }

  function addRandomCircle(e) {
    const radius = Math.random() * 40 + 1;
    const colors = [
      '#F262D3',
      '#FF7D00',
      '#FFD500',
      '#3DD94A',
      '#41C4FF',
      '#9574EA'
    ];

    const idx =  Math.floor(Math.random() * colors.length);
    context.strokeStyle = colors[idx];
    addCircle(e.clientX, e.clientY, radius);
  }

  function addCircle(x, y, r) {
    context.beginPath();
    context.arc(x, y, r, 0, 2 * Math.PI);
    context.stroke();
  }

  function clearCanvasOnSpace(e) {
    if (e.keyCode === 32) {
      clearCanvas();
    }
  }

  // Draws bubbles wherever mouse moved
  const drawBubbles = [
    ['click', toggleIsDrawing, false],
    ['mousemove', e => { if (isDrawing) { addRandomCircle(e)} }, false],
    ['keydown', clearCanvasOnSpace, false]
  ];

  const functions = [drawBubbles];

  function initialize() {
    // make drawing less blurry
    context.translate(0.5, 0.5);

    // set initial canvas size
    resizeCanvas();

    setWindowEventListeners();
    setCanvasEventListeners();
  }

  function setWindowEventListeners() {
    window.addEventListener('resize', resizeCanvas, false);
    window.addEventListener('keydown', switchFunctions, false);
  }

  function setCanvasEventListeners() {
    functions[currentFunc].forEach((l) => {
      canvas.addEventListener(l[0], l[1], l[2]);
    })
  }

  function clearCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);
  }

  function resizeCanvas() {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
  }

  function switchFunctions(e) {
    if (e.keyCode === 37) { // left
      currentFunc = (currentFunc - 1) < 0 ? functions.length - 1 : currentFunc - 1;
    }
    else if (e.keyCode === 39) { // right
      currentFunc = (currentFunc + 1) >= functions.length ? 0 : currentFunc + 1;
    }
  }

  initialize();
})();