class Game {
  //PROPIEDADES
  constructor() {
    this.fondo = new Image();
    this.fondo.src = "../imagenes/bg-game.jpg";

    this.bailarin = new Bailarin();
    this.coctel = new Coctel();
    this.corazon = new Corazon();

    this.bolasDiscoArr = [];
    this.coctelArr = [];
    this.cdArr= []
    this.frames = 1;

    this.gameover = false;

    this.vidas = 2;
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

  cdAparece = () => {
    if (this.cdArr.length === 0 || this.frames % 60 === 0) {
      let randomPosx = Math.random() * 995;

      let cdCae = new Cdoro (randomPosx);
      this.cdArr.push(cdCae);
    }
  };

  eliminarBolas = () => {
    if (this.bolasDiscoArr[0].y + this.bolasDiscoArr[0].h > 610) {
      this.bolasDiscoArr.shift();
    }
  };

  eliminarCocteles = () => {
    if (this.coctelArr[0].y + this.coctelArr[0].h > 610) {
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
        scoreDOM.innerText++;
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

        this.vidas--;

        if (this.vidas <= 0) {
          this.gameOver();
        }
      } else {
        
      }
    });
  };

  acelerarJuego = () => {
    if (scoreDOM.innerText >= 3) {
      //console.log ("Subiendo el ritmo")
      this.frames++;
    }
    if (scoreDOM.innerText >= 10) {
      this.frames++;
    }

    if (scoreDOM.innerText >= 20) {
      this.frames++;
    }
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

    this.cdAparece()
    this.cdArr.forEach((cadaCd) => {
      cadaCd.moverCd();
    });

    this.eliminarBolas();
    this.eliminarCocteles();

    this.colisionBailarinBolas();
    this.colisionBailarinCoctel();

    this.acelerarJuego();

    //3. Dibujado de los elementos
    this.fondoCanvas();
    this.bailarin.dibujoBailarin();

    this.bolasDiscoArr.forEach((cadaBola) => {
      cadaBola.dibujoBola();
    });

    this.coctelArr.forEach((cadaCoctel) => {
      cadaCoctel.dibujoCoctel();
    });

    if (this.vidas === 2){
      this.corazon.dibujoCorazon()}

    //4. Recursion y control
    if (this.gameover === false) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}
