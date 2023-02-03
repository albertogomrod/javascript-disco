class Discoscore {
  constructor(xPos) {
    this.x = xPos;
    this.y = 3;
    this.w = 60;
    this.h = 60;

    this.image = new Image();
    this.image.src = "./imagenes/disco-dorado.png";
  }

  //Metodos

  dibujoDiscoscore = () => {
    ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
  };
}
