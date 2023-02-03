class Bailarin {
  //PROPIEDADES
  constructor() {
    this.x = 100;
    this.y = 350;
    this.h = 100;
    this.w = 80;
    this.speed = 55;
    this.image = new Image();
    this.image.src = "./imagenes/bailarinpixelart.png";
    this.izquierda = true;
    this.derecha = true;
  }

  //METODOS

  dibujoBailarin = () => {
    ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
  };

  movimientoBailarinIzquierda = () => {
    this.x -= this.speed;
  };
  movimientoBailarinDerecha = () => {
    this.x += this.speed;
  };

  paredesBailarin = () => {
    if (this.x <= 0) {
      this.izquierda = false;
    } else {
      this.izquierda = true;
    }

    if (this.x + this.w >= canvas.width - 15) {
      this.derecha = false;
    } else {
      this.derecha = true;
    }
  };
}
