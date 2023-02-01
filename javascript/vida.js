class Corazon {
    constructor() {
      this.x = 20;
      this.y = 15;
      this.w = 40;
      this.h = 40;
  
      this.image = new Image();
      this.image.src = "./imagenes/corazon-vida.png";

    }
  
    //Metodos
  
    dibujoCorazon = () => {
      ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
    };

  
  }