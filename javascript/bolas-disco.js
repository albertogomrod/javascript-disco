class Bolas {
  constructor(xPos) {
    this.x = xPos;
    this.y = 0; 
    this.w = 85;
    this.h = 85;

    this.speed = 2;
    this.image = new Image();
    this.image.src = "../imagenes/bola-disco.png"
  }

  //Metodos

  dibujoBola = ()=>{
    ctx.drawImage(this.image, this.x, this.y, this.w, this.h)
  }

  moverBolas = ()=>{
    this.y += this.speed
  }
}
