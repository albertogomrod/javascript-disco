class Corazon {
    constructor() {
      this.x = 20;
      this.y = 15;
      this.w = 50;
      this.h = 50;
  
      this.image = new Image();
      this.image.src = "../imagenes/corazon-vida.png";

    }
  
    //Metodos
  
    dibujoCorazon = () => {
      ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
    };

  
  }