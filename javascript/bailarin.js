class Bailarin {
  //PROPIEDADES
  constructor() {
    this.x = 100; //Posición en eje X
    this.y = 450; //Posición en eje Y
    this.h = 120; //Altura
    this.w = 100; //Ancho
    this.speed = 60;
    this.image = new Image();
    this.image.src = "./imagenes/bailarin.png";
    this.izquierda= true
    this.derecha= true
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
    if ((this.x <= 0)) {
      this.izquierda = false;
    } else {
      this.izquierda = true;
    }

    if ((this.x + this.w >= canvas.width)) {
      this.derecha = false;
    } else {
      this.derecha = true;
    }
  };
}
