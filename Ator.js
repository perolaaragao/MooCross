//código do ator

//variaveis do ator
let xAtor = 85;
let yAtor = 366;
let colisao = false 
let meusPontos = 0

function MostraAtor () {
  image(ImagemDoAtor, xAtor, yAtor, 30, 30);
}

function MovimentaAtor () {
  if (keyIsDown (UP_ARROW)) {
    yAtor -= 3
  }
  if (keyIsDown (DOWN_ARROW)) {
    if(PodeSeMover()) {
      yAtor += 3
    }
  }
}

function VerificaColisao () {
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < ImagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros [i], comprimentoCarro, alturaCarro, xAtor, yAtor, 20)
    if (colisao){
      VoltaAtorInicial ();
      somDaColisao.play();
      if (meusPontos > 0){
      meusPontos -= 1;
      }
    }
  }
}

function VoltaAtorInicial () {
  yAtor = 366;
}

function IncluiPontos () {
  textAlign (CENTER);
  textSize (25);
  fill (255, 255, 0);
  text(meusPontos, width / 5, 27);
}

function MarcaPonto () {
  if (yAtor < 15){
    meusPontos += 1;
    somDoPonto.play();
    VoltaAtorInicial ();
  }
}

function PodeSeMover () {
  return yAtor < 366;
}