class Cora {
  constructor(xPos) {
    this.x = xPos;
    this.y = 15;
    this.w = 40;
    this.h = 40;

    this.speed = 5;
    this.image = new Image();
    this.image.src = "./imagenes/corazon-vida.png";
  }

  //Metodos

  dibujoCora = () => {
    ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
  };

  moverCora = () => {
    this.y += this.speed;
  };
}
