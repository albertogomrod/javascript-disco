class Game {
  //PROPIEDADES
  constructor() {
    this.fondo = new Image();
    this.fondo.src = "./imagenes/bg-game.jpg";

    this.bailarin = new Bailarin();
    this.coctel = new Coctel();
    this.corazon = new Corazon();

    this.bolasDiscoArr = [];
    this.coctelArr = [];
    this.cdArr = [];
    this.coraArr = [];

    this.frames = 1;

    this.gameover = false;
    this.juegoOn = true

    this.vidas = 2;

    
    this.sonidoDerrota = new Audio("./Sonidos/sonido-gameover.wav");
    this.sonidoBola = new Audio("./Sonidos/sonido-bola.wav");
    this.sonidoCoctel = new Audio("./Sonidos/coctel-roto.wav");
    this.sonidoCD = new Audio("./Sonidos/discosonido.wav");
    this.sonidoVida = new Audio("./Sonidos/vida.mp3");
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
      let randomPosx = Math.random() * 880;

      let bolasCaen = new Bolas(randomPosx);
      this.bolasDiscoArr.push(bolasCaen);
    }
  };

  velocidadCoctelUno = () => {
    if (this.coctelArr.length === 0 || this.frames % 40 === 0) {
      let randomPosx = Math.random() * 880;

      let coctelCae = new Coctel(randomPosx);
      this.coctelArr.push(coctelCae);
    }
  };

  velocidadCoctelDos = () => {
    if (this.frames % 35 === 0) {
      let randomPosx = Math.random() * 880;

      let coctelCae = new Coctel(randomPosx);
      this.coctelArr.push(coctelCae);
    }
  };

  velocidadCoctelTres = () => {
    if (this.frames % 30 === 0) {
      let randomPosx = Math.random() * 880;

      let coctelCae = new Coctel(randomPosx);
      this.coctelArr.push(coctelCae);
    }
  };

  cdAparece = () => {
    if (this.frames % 540 === 0) {
      let randomPosx = Math.random() * 885;

      let cdCae = new Cdoro(randomPosx);
      this.cdArr.push(cdCae);
    }
  };

  coraAparece = () => {
    if (this.frames % 540 === 0) {
      let randomPosx = Math.random() * 885;

      let coraCae = new Cora(randomPosx);
      this.coraArr.push(coraCae);
    }
  };

  eliminarBolas = () => {
    if (this.bolasDiscoArr[0].y + this.bolasDiscoArr[0].h > 450) {
      this.bolasDiscoArr.shift();
    }
  };

  eliminarCocteles = () => {
    if (this.coctelArr[0].y + this.coctelArr[0].h > 450) {
      this.coctelArr.shift();
    }
  };

  eliminarCoras = () => {
    if (this.coraArr[0].y + this.coraArr[0].h > 450) {
      this.coraArr.shift();
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
        //console.log("bailarin ha colisionado con bola");
        this.bolasDiscoArr.shift();
        //¿¿¿PUNTUACION??
        scoreDOM.innerText++;
        this.sonidoBola.play();
        this.sonidoBola.volume = 0.03;
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
        //console.log("bailarin ha colisionado con coctel");
        this.coctelArr.shift();
        //Gameover

        this.vidas--;
        this.sonidoCoctel.play();
        this.sonidoCoctel.volume = 0.03;

        if (this.vidas <= 0) {
          this.gameOver();
        }
      } else {
      }
    });
  };

  colisionBailarinCD = () => {
    this.cdArr.forEach((cadaCD) => {
      if (
        cadaCD.x < this.bailarin.x + this.bailarin.w &&
        cadaCD.x + cadaCD.w > this.bailarin.x &&
        cadaCD.y < this.bailarin.y + this.bailarin.h &&
        cadaCD.h + cadaCD.y > this.bailarin.y
      ) {
        //console.log("bailarin ha colisionado con cd");
        this.cdArr.shift();
        this.sonidoCD.play();
        this.sonidoCD.volume = 0.03;

        scoreDOM.innerText++;
        this.bailarin.speed = this.bailarin.speed + 2;
      } else {
      }
    });
  };

  colisionBailarinCora = () => {
    this.coraArr.forEach((cadaCora) => {
      if (
        cadaCora.x < this.bailarin.x + this.bailarin.w &&
        cadaCora.x + cadaCora.w > this.bailarin.x &&
        cadaCora.y < this.bailarin.y + this.bailarin.h &&
        cadaCora.h + cadaCora.y > this.bailarin.y
      ) {
        this.coraArr.shift();
        if (this.vidas === 2) {
          scoreDOM.innerText++;
        }

        if (this.vidas < 2) {
          this.vidas++;
        }

        this.sonidoVida.play();
        this.sonidoVida.volume = 0.06;
      } else {
      }
    });
  };

  gameOver = () => {
    this.juegoOn = false;
    canvas.style.display = "none";
    pantallaGameoverDOM.style.display = "flex";
    pauseDOM.style.display = "none";

    musica.pause();
    this.sonidoDerrota.play();
    this.sonidoDerrota.volume = 0.05;
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

    if (scoreDOM.innerText >= 0) {
      this.velocidadCoctelUno();
    }

    if (scoreDOM.innerText >= 10) {
      this.velocidadCoctelDos();
    }

    if (scoreDOM.innerText >= 25) {
      this.velocidadCoctelTres();
    }
    this.coctelArr.forEach((cadaCoctel) => {
      cadaCoctel.moverCoctel();
    });

    this.cdAparece();
    this.cdArr.forEach((cadaCD) => {
      cadaCD.moverCd();
    });

    this.coraAparece();
    this.coraArr.forEach((cadaCora) => {
      cadaCora.moverCora();
    });

    this.eliminarBolas();
    this.eliminarCocteles();

    this.colisionBailarinBolas();
    this.colisionBailarinCoctel();
    this.colisionBailarinCD();
    this.colisionBailarinCora();

    //3. Dibujado de los elementos
    this.fondoCanvas();
    this.bailarin.dibujoBailarin();

    this.bolasDiscoArr.forEach((cadaBola) => {
      cadaBola.dibujoBola();
    });

    this.coctelArr.forEach((cadaCoctel) => {
      cadaCoctel.dibujoCoctel();
    });

    this.cdArr.forEach((cadaCD) => {
      cadaCD.dibujoCd();
    });

    this.coraArr.forEach((cadaCora) => {
      cadaCora.dibujoCora();
    });

    if (this.vidas === 2) {
      this.corazon.dibujoCorazon();
    }

    //4. Recursion y control
    if (this.juegoOn === true) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}
