// VARIABLES GLOBALES
const pantallaInicioDOM = document.querySelector("#pantalla-inicio");
const pantallaGameoverDOM = document.querySelector("#pantalla-gameover");
const canvas = document.querySelector("#my-canvas");
const marcadorDOM = document.querySelector("#marcador");
let scoreDOM = document.querySelector("#score span");

let musica = new Audio("./Sonidos/stayin-alive.mp3");

let game;

const inicioBtnDOM = document.querySelector("#btn-inicio");
const reinicioBtnDOM = document.querySelector("#btn-reinicio");
let pauseDOM = document.querySelector("#btn-pausa");

const ctx = canvas.getContext("2d");

// MANEJO DE ESTADO FUNCIONES

const inicioJuego = () => {
  pantallaInicioDOM.style.display = "none";
  canvas.style.display = "block";
  pantallaGameoverDOM.style.display = "none";
  marcadorDOM.style.display = "flex";
  scoreDOM.innerText = 0;
  pauseDOM.style.display = "block";

  musica.play();
  musica.volume = 0.01;

  game = new Game();

  game.gameLoop();
};

//ADDEVENTLISTENERS

inicioBtnDOM.addEventListener("click", inicioJuego);
reinicioBtnDOM.addEventListener("click", inicioJuego);

window.addEventListener("keydown", (event) => {
  if (event.code === "ArrowLeft" && game.bailarin.izquierda === true) {
    game.bailarin.movimientoBailarinIzquierda();
  }

  if (event.code === "ArrowRight" && game.bailarin.derecha === true) {
    game.bailarin.movimientoBailarinDerecha();
  }
});

pauseDOM.addEventListener("click", () => {
  if (game.juegoOn === true) {
    game.juegoOn = false;
    musica.pause();
  } else {
    game.juegoOn = true;
    game.gameLoop();
    musica.play();
  }
});
