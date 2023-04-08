let canvas;
let world;
let keyboard = new Keyboard();
let gameOver = false;
let intervalIds = [];


function init() {
  bindTouchBtns();
  initLevel();
  removeClasses();
  canvas = document.getElementById("canvas");
  world = new World(canvas, keyboard, function clearIntervals() {
    intervalIds.forEach(clearInterval);
  }, gameOver);
}

function nextLvl() {
  bindTouchBtns();
  nextLevelInit();
  removeClasses();
  canvas = document.getElementById("canvas");
  world = new World(canvas, keyboard, function clearIntervals() {
    intervalIds.forEach(clearInterval);
  }, gameOver);
  world.level = level2;
}

function clearIntervals() {
  intervalIds.forEach(clearInterval);
};

function setStoppableInterval(fn, time) {
  let id = setInterval(fn, time);
  intervalIds.push(id);
}

function mute() {
  if (!world.character.mute) {
    world.character.mute = true;
  }
  else {
    world.character.mute = false;
  }
}

function bgMusic() {
  if (!world.character.muteBg) world.character.muteBg = true;
  else world.character.muteBg = false;
}

function showFullscreen() {
  canvas.requestFullscreen();
}

function openControls() {
  if (document.getElementById("instructions").classList.contains("d-none")) {
    document.getElementById("instructions").classList.remove("d-none");
  } else {
    document.getElementById("instructions").classList.add("d-none");
  }
}

function closeControls() {
  document.getElementById("instructions").classList.add("d-none");
}

function removeClasses() {
  document.getElementById("startScreenContainer").style.display = "none";
  document.getElementById("endScreenContainer").style.display = "none";
  document.getElementById("fullscreenBtn").classList.remove("d-none")
  document.getElementById("btn-left").classList.remove("d-none")
  document.getElementById("btn-right").classList.remove("d-none")
  document.getElementById("btn-jump").classList.remove("d-none")
  document.getElementById("btn-throw").classList.remove("d-none")
}

window.addEventListener("keydown", (event) => {
  if (event.keyCode == 37) {
    keyboard.left = true;
  }
  if (event.keyCode == 38) {
    keyboard.up = true;
  }
  if (event.keyCode == 39) {
    keyboard.right = true;
  }
  if (event.keyCode == 40) {
    keyboard.down = true;
  }
  if (event.keyCode == 32) {
    keyboard.space = true;
  }
  if (event.keyCode == 68) {
    keyboard.d = true;
  }
});

window.addEventListener("keyup", (event) => {
  if (event.keyCode == 37) {
    keyboard.left = false;
  }
  if (event.keyCode == 38) {
    keyboard.up = false;
  }
  if (event.keyCode == 39) {
    keyboard.right = false;
  }
  if (event.keyCode == 40) {
    keyboard.down = false;
  }
  if (event.keyCode == 32) {
    keyboard.space = false;
  }
  if (event.keyCode == 68) {
    keyboard.d = false;
  }
});

// einbindung von touchbtns
function bindTouchBtns() {
  document.getElementById("btn-left").addEventListener("touchstart", (e) => {
    e.preventDefault();
    keyboard.left = true;
  });

  document.getElementById("btn-left").addEventListener("touchend", (e) => {
    e.preventDefault();
    keyboard.left = false;
  });

  document.getElementById("btn-right").addEventListener("touchstart", (e) => {
    e.preventDefault();
    keyboard.right = true;
  });

  document.getElementById("btn-right").addEventListener("touchend", (e) => {
    e.preventDefault();
    keyboard.right = false;
  });

  document.getElementById("btn-jump").addEventListener("touchstart", (e) => {
    e.preventDefault();
    keyboard.space = true;
  });

  document.getElementById("btn-jump").addEventListener("touchend", (e) => {
    e.preventDefault();
    keyboard.space = false;
  });

  document.getElementById("btn-throw").addEventListener("touchstart", (e) => {
    e.preventDefault();
    keyboard.d = true;
  });

  document.getElementById("btn-throw").addEventListener("touchend", (e) => {
    e.preventDefault();
    keyboard.d = false;
  });
}
