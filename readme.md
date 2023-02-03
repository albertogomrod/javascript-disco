Javascript Disco

Description
Javascript Disco es un juego ambientado en la música Disco de los 70'.
El personaje, la persona con más movilidad de cadera del planeta Tierra, se moverá horizontalmente cogiendo bolas de discoteca (+1 punto), discos de oro (+3 puntos), y corazones (+1 vida) que caen desde la parte superior de la pantalla.
Su reto será coger todos estos objetos sin tropezar con su kriptonita: el alcohol. Deberá esquivar los cócteles que caen desde el techo de la discoteca. El bailarn contará con dos vidas para poder aguantar toda la noche.

MVP (DOM - CANVAS)
El bailarin se mueve horizontalmente.
Debe coger: bolas de discoteca, discos de oro y corazones que aparecen de forma aleatoria desde la parte superior de la pantalla.
Desde la parte superior de la pantalla aparecen cócteles que deberá esquivar.
Todos los objetos, excepto el coctel, sumará puntos al marcador.
La dificultad aumenta según el marcador.

Backlog
Disparar de vuelta a los cócteles los discos de oro.
Cuando cogiese el balarin X cantidad de discos, cambiar de canción.
Movimiento de la imagen del personaje.

Data Structure

main.js
inicioJuego () {}

game.js
Game () {}
fondoCanvas () {}
limpiarCanvas () {}
bolasAparecen () {}
cdAparece () {}
coraAparece () {}
velocidadCoctelUno () {}
velocidadCoctelDos () {}
velocidadCoctelTres () {}
eliminarBolas () {}
eliminarCocteles () {}
eliminarDiscos () {}
eliminarCorazones () {}
colisionBailarinBolas () {}
colisionBailarinCD () {}
colisionBailarinCoctel () {}
colisionBailarinCora () {}
GameOver () {}
gameLoop () {}

bailarin.js
constructor() {this.x; this.y; this.h; this.w; this.speed; this.image; this.image.src; this.izquierda; this.derecha}
dibujoBailarin () {}
movimientoBailarinIzquierda () {}
movimientoBailarinDerecha () {}
paredesBailarin () {}

bolas-disco.js
Bolas () { this.x; this.y; this.h; this.w; this.speed; this.image; this.image.src }
dibujoBola() {}
moverBolas () {}

coctel-disco.js
Coctel () { this.x; this.y; this.h; this.w; this.speed; this.image; this.image.src}
dibujoCoctel () {}
moverCoctel () {}

coctel-disco.js
Coctel () { this.x; this.y; this.h; this.w; this.speed; this.image; this.image.src}
dibujoCoctel () {}
moverCoctel () {}

corazones.js
Cora () { this.x; this.y; this.h; this.w; this.speed; this.image; this.image.src}
dibujoCora () {}
moverCora () {}

oro-cd.js
Cdoro () { this.x; this.y; this.h; this.w; this.speed; this.image; this.image.src}
dibujoCd () {}
moverCd () {}

score-disco.js
Discoscore () { this.x; this.y; this.h; this.w; this.image; this.image.src}
dibujoDiscoscore () {}

vida.js
Corazon () { this.x; this.y; this.h; this.w; this.image; this.image.src}
dibujoCorazon () {}

States y States Transitions
Definicion de los estados y sus transiciones.

pantallaInicioDOM
pantallaGameoverDOM
canvas

Links

Git
https://albertogomrod.github.io/javascript-disco/

Slides
https://docs.google.com/presentation/d/1zj9nFXZ2FI_ib6CFcLwx9L8vRQvW_ocOIUXF_HZM0wA/edit?usp=sharing
