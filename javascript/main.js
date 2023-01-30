// VARIABLES GLOBALES
const pantallaInicioDOM = document.querySelector("#pantalla-inicio");
const pantallaGameoverDOM = document.querySelector("#pantalla-gameover");
const canvas = document.querySelector("#my-canvas");
const marcadorDOM = document.querySelector("#marcador")
let scoreDOM = document.querySelector("#score span")

let game;

const inicioBtnDOM = document.querySelector("#btn-inicio");
const reinicioBtnDOM = document.querySelector("#btn-reinicio");

const ctx = canvas.getContext("2d");

// MANEJO DE ESTADO FUNCIONES

const inicioJuego = () => {
  console.log("Intentando iniciar el juego");

  //1.Cambiar pantalla
  pantallaInicioDOM.style.display = "none";
  canvas.style.display = "block";
  pantallaGameoverDOM.style.display = "none";
  marcadorDOM.style.display = "flex"
  scoreDOM.innerText= 0

  //2.Crear un juego
  game = new Game();

  //3.Iniciar el game loop
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
