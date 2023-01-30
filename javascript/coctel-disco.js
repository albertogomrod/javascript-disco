class Coctel {
  constructor(xPos) {
    this.x = xPos;
    this.y = 0;
    this.w = 55;
    this.h = 55;

    this.speed = 3;
    this.image = new Image();
    this.image.src = "../imagenes/coctel.png";
  }

  //Metodos

  dibujoCoctel = () => {
    ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
  };

  moverCoctel = () => {
    this.y += this.speed;
  };
}
