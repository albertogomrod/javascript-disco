class Game {
  //PROPIEDADES
  constructor() {
    this.fondo = new Image();
    this.fondo.src = "./imagenes/bg-game.jpg";

    this.bailarin = new Bailarin();
    this.coctel = new Coctel();
    this.corazon = new Corazon();
    this.discoScore = new Discoscore();

    this.bolasDiscoArr = [];
    this.coctelArr = [];
    this.cdArr = [];
    this.coraArr = [];
    this.discoScoreArr = [];
    this.corazonesArr = [];

    this.frames = 1;

    this.gameover = false;
    this.juegoOn = true;

    this.vidas = 2;
    this.discos = 0;

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
    if (this.frames % 38 === 0) {
      let randomPosx = Math.random() * 880;

      let coctelCae = new Coctel(randomPosx);
      this.coctelArr.push(coctelCae);
    }
  };

  velocidadCoctelTres = () => {
    if (this.frames % 36 === 0) {
      let randomPosx = Math.random() * 880;

      let coctelCae = new Coctel(randomPosx);
      this.coctelArr.push(coctelCae);
      this.speed = 3.5;
    }
  };

  cdAparece = () => {
    if (this.frames % 500 === 0) {
      let randomPosx = Math.random() * 880;

      let cdCae = new Cdoro(randomPosx);
      this.cdArr.push(cdCae);
    }
  };

  coraAparece = () => {
    if (this.frames % 540 === 0) {
      let randomPosx = Math.random() * 880;

      let coraCae = new Cora(randomPosx);
      this.corazonesArr.push(coraCae);
    }
  };

  discoscoreAparece = () => {
    if (this.discos === 1) {
      let xPos = 120;
      let discoscore = new Discoscore(xPos);
      this.discoScoreArr.push(discoscore);
    }

    if (this.discos === 2) {
      let xPos = 150;
      let discoscore = new Discoscore(xPos);
      this.discoScoreArr.push(discoscore);
    }

    if (this.discos === 3) {
      let xPos = 180;
      let discoscore = new Discoscore(xPos);
      this.discoScoreArr.push(discoscore);
    }

    if (this.discos === 4) {
      let xPos = 210;
      let discoscore = new Discoscore(xPos);
      this.discoScoreArr.push(discoscore);
    }

    if (this.discos === 5) {
      let xPos = 240;
      let discoscore = new Discoscore(xPos);
      this.discoScoreArr.push(discoscore);
    }

    if (this.discos === 6) {
      let xPos = 270;
      let discoscore = new Discoscore(xPos);
      this.discoScoreArr.push(discoscore);
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

  eliminarCorazones = () => {
    if (this.corazonesArr[0].y + this.corazonesArr[0].h > 450) {
      this.corazonesArr.shift();
    }
  };

  eliminarDiscos = () => {
    if (this.cdArr[0].y + this.cdArr[0].h > 450) {
      this.cdArr.shift();
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

        this.bailarin.speed = 45;

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
        scoreDOM.innerText++;
        scoreDOM.innerText++;
        this.discos++;

        this.bailarin.speed = this.bailarin.speed + 2;
      } else {
      }
    });
  };

  colisionBailarinCora = () => {
    this.corazonesArr.forEach((cadaCora) => {
      if (
        cadaCora.x < this.bailarin.x + this.bailarin.w &&
        cadaCora.x + cadaCora.w > this.bailarin.x &&
        cadaCora.y < this.bailarin.y + this.bailarin.h &&
        cadaCora.h + cadaCora.y > this.bailarin.y
      ) {
        this.corazonesArr.shift();
        this.bailarin.speed = 55;

        if (this.vidas === 2) {
          scoreDOM.innerText++;
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

    if (scoreDOM.innerText >= 15) {
      this.velocidadCoctelDos();
    }

    if (scoreDOM.innerText >= 30) {
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
    this.corazonesArr.forEach((cadaCora) => {
      cadaCora.moverCora();
    });

    this.discoscoreAparece();

    this.eliminarBolas();
    this.eliminarCocteles();
    if(this.corazonesArr.length>0){
      //console.log("eliminando corazon")
      this.eliminarCorazones()};
      if(this.cdArr.length>0){
        this.eliminarDiscos()};

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

    this.corazonesArr.forEach((cadaCora) => {
      cadaCora.dibujoCora();
    });

    this.discoScoreArr.forEach((cadaDisco) => {
      cadaDisco.dibujoDiscoscore();
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
