class Game {
  //PROPIEDADES
  constructor() {
    this.fondo = new Image();
    this.fondo.src = "../imagenes/bg-game.jpg";

    this.bailarin = new Bailarin();

    this.bolasDiscoArr = [];
    this.coctelArr = [];
    this.frames = 1;

    this.gameover = false;

    this.score= scoreDOM.innerText
    this.score= 0


    
  }

  //METODOS

  fondoCanvas = () => {
    ctx.drawImage(this.fondo, 0, 0, canvas.width, canvas.height);
  };

  limpiarCanvas = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  bolasAparecen = () => {
    if (this.bolasDiscoArr.length === 0 || this.frames % 240 === 0) {
      let randomPosx = Math.random() * 995;

      let bolasCaen = new Bolas(randomPosx);
      this.bolasDiscoArr.push(bolasCaen);
    }
  };

  coctelAparece = () => {
    if (this.coctelArr.length === 0 || this.frames % 60 === 0) {
      let randomPosx = Math.random() * 995;

      let coctelCae = new Coctel(randomPosx);
      this.coctelArr.push(coctelCae);
    }
  };

  eliminarBolas = () => {
    if (this.bolasDiscoArr[0].y + this.bolasDiscoArr[0].h > 625) {
      this.bolasDiscoArr.shift();
    }
  };

  eliminarCocteles = () => {
    if (this.coctelArr[0].y + this.coctelArr[0].h > 625) {
      this.coctelArr.shift();
    }
  };

  colisionBailarinBolas = () => {
    this.bolasDiscoArr.forEach((cadaBola) => {
      if (
        cadaBola.x < this.bailarin.x + this.bailarin.w &&
        cadaBola.x + cadaBola.w > this.bailarin.x &&
        cadaBola.y < this.bailarin.y + this.bailarin.h &&
        cadaBola.h + cadaBola.y > this.bailarin.y
      ) {
        console.log("bailarin ha colisionado con bola");
        this.bolasDiscoArr.shift();
        //¿¿¿PUNTUACION??
        scoreDOM.innerText++
      } else {
        //BONUS RESTAr PUNTOS????
      }
    });
  };

  colisionBailarinCoctel = () => {
    this.coctelArr.forEach((cadaCoctel) => {
      if (
        cadaCoctel.x < this.bailarin.x + this.bailarin.w &&
        cadaCoctel.x + cadaCoctel.w > this.bailarin.x &&
        cadaCoctel.y < this.bailarin.y + this.bailarin.h &&
        cadaCoctel.h + cadaCoctel.y > this.bailarin.y
      ) {
        console.log("bailarin ha colisionado con coctel");
        this.coctelArr.shift();
        //Gameover
        this.gameOver();
      } else {
      }
    });
  };

  gameOver = () => {
    this.gameover = true;
    canvas.style.display = "none";
    pantallaGameoverDOM.style.display = "flex";
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

    this.eliminarBolas();
    this.eliminarCocteles();

    this.colisionBailarinBolas();
    this.colisionBailarinCoctel();

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
    if (this.gameover === false) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}
