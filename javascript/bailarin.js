class Bailarin {
  //PROPIEDADES
  constructor() {
    this.x = 100; //Posición en eje X
    this.y = 350; //Posición en eje Y
    this.h = 100; //Altura
    this.w = 80; //Ancho
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

  //Que el bailarin se mueva

  movimientoBailarinIzquierda = () => {
    this.x -= this.speed;
  };
  movimientoBailarinDerecha = () => {
    this.x += this.speed;
  };

  //Paredes del Bailarin

  paredesBailarin = () => {
    if (this.x <= 0) {
      this.izquierda = false;
    } else {
      this.izquierda = true;
    }

    if (this.x + this.w >= canvas.width - 50) {
      this.derecha = false;
    } else {
      this.derecha = true;
    }
  };
}
