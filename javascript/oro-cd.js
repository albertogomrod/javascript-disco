class Cdoro {
    constructor(xPos) {
      this.x = xPos;
      this.y = 0;
      this.w = 75;
      this.h = 75;
  
      this.speed = 5;
      this.image = new Image();
      this.image.src = "./imagenes/disco-dorado.png";
    }
  
    //Metodos
  
    dibujoCd = () => {
      ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
    };
  
    moverCd = () => {
      this.y += this.speed;
    };
  }