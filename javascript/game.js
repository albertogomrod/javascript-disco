class Game {
  //PROPIEDADES
  constructor() {
    this.fondo = new Image();
    this.fondo.src = "../imagenes/bg-game.jpg";

    this.bailarin = new Bailarin();

    this.bolasDiscoArr = [];
    this.coctelArr = [];
    this.frames = 1;
  }

  //METODOS

  fondoCanvas = () => {
    ctx.drawImage(this.fondo, 0, 0, canvas.width, canvas.height);
  };

  limpiarCanvas = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  bolasAparecen = () => {
    if (this.bolasDiscoArr.length === 0 || this.frames % 120 === 0) {
      let randomPosx = Math.random() * 995;

      let bolasCaen = new Bolas(randomPosx);
      this.bolasDiscoArr.push(bolasCaen);
    }
  };

  coctelAparece = () => {
    if (this.coctelArr.length === 0 || this.frames % 165 === 0) {
      let randomPosx = Math.random() * 995;

      let coctelCae = new Coctel(randomPosx);
      this.coctelArr.push(coctelCae);
    }
  };

  gameLoop = () => {
    this.frames++;
    //1.Limpiar el canvas
    this.limpiarCanvas();

    //2. Movimientos y acciones de los elementos.
    this.bailarin.movimientoBailarinIzquierda();
    this.bailarin.movimientoBailarinDerecha();
    this.bailarin.paredesBailarin();

    this.bolasAparecen();
    this.bolasDiscoArr.forEach((cadaBola) => {
      cadaBola.moverBolas();
    });

    this.coctelAparece();
    this.coctelArr.forEach((cadaCoctel) => {
      cadaCoctel.moverCoctel();
    });

    //3. Dibujado de los elementos
    this.fondoCanvas();
    this.bailarin.dibujoBailarin();

    this.bolasDiscoArr.forEach((cadaBola) => {
      cadaBola.dibujoBola();
    });

    this.coctelArr.forEach((cadaCoctel) => {
      cadaCoctel.dibujoCoctel();
    });

    //4. Recursion y control
    requestAnimationFrame(this.gameLoop);
  };
}
