// variaveis bolinha

let xBolinha = 300
let yBolinha = 200
let diametroBolinha = 18
let velocidadeXBolinha = 5
let velocidadeYBolinha = 5
let raio = diametroBolinha / 2

// variaveis raquete 

let xRaquete = 5 
let yRaquete = 150
let comprimentoRaquete = 10
let alturaRaquete = 80

// variaveis raquete inimiga 

let xRaqueteInimiga = 585
let yRaqueteInimiga = 150
let velocidadeYInimiga

var colidiu = false

//placar do jogo

var meusPontos=0
var pontosInimigos=0


function setup(){
    createCanvas(600,400)

}

function draw(){
    background (143,188,143)
    meioCampo()
    mostraBolinha()
    movimentaBolinha()
    colisaoBolinha(233,237,238)
    raquete(xRaquete,yRaquete)
    movimentoRaquete()
    movimentoRaqueteInimiga()
    raqueteInimiga(xRaqueteInimiga,yRaqueteInimiga)
    verificarColisao(xRaquete,yRaquete)
    verificarColisao(xRaqueteInimiga,yRaqueteInimiga)
    incluiPlacar()
    adicionarPonto()


}

function mostraBolinha(){
      circle(xBolinha,yBolinha,diametroBolinha)
}

function movimentaBolinha(){
   xBolinha += velocidadeXBolinha
    yBolinha += velocidadeYBolinha
}

function colisaoBolinha(){
     if (xBolinha+raio>width || xBolinha - raio < 0){
      velocidadeXBolinha *= -1
    }
    if (yBolinha+raio>height || yBolinha - raio < 0){
      velocidadeYBolinha *= -1
    }
}

function raquete(x,y){
  rect (x,y,comprimentoRaquete,alturaRaquete,2,2)
}

function movimentoRaquete(){
  if (keyIsDown(UP_ARROW)&&yRaquete > 0){
    yRaquete -= 10
  }
  if (keyIsDown(DOWN_ARROW)&&yRaquete < 320){
    yRaquete -= -10
  }
}


function verificarColisao(x,y) {
    colidiu = collideRectCircle(x, y, comprimentoRaquete, alturaRaquete, xBolinha, yBolinha, raio)
    if (colidiu){
    velocidadeXBolinha *= -1
    }
}


function raqueteInimiga(){
  rect (xRaqueteInimiga,yRaqueteInimiga,comprimentoRaquete,alturaRaquete,2,2)
}

function movimentoRaqueteInimiga(){
  if (keyIsDown(87)&&yRaqueteInimiga > 0){
    yRaqueteInimiga -= 10
  }
  if (keyIsDown(83)&&yRaqueteInimiga < 320){
    yRaqueteInimiga -= -10
  }
}

function meioCampo(){
  rect (300,0,2,3000)
}

function incluiPlacar(){
  stroke(255)
  textFont("Century Gothic")
  textAlign("center")
  textSize(20)
  fill(color(47,79,79))
  rect(240,8,50,30,15,15)
  fill(255)
  text(meusPontos,265,30)
  fill(color(47,79,79))
  rect(310,8,50,30,15,15)
  fill(255)
  text(pontosInimigos,333,30)

}

function adicionarPonto(){
  if(xBolinha>590){
    meusPontos += 1
     }
  if(xBolinha<10){
    pontosInimigos += 1
  }
}