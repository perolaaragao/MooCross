//imagens do jogo

let ImagemDaEstrada;
let ImagemDoAtor;
let ImagemCarro;
let ImagemCarro2;
let ImagemCarro3;
let ImagemCarros;

//sons do jogo
let somDaTrilha;
let somDaColisao;
let somDoPonto;

function preload () {
  ImagemDaEstrada = loadImage ("Imagens/estrada.png");
  ImagemDoAtor = loadImage ("Imagens/ator-1.png");
  ImagemCarro = loadImage ("Imagens/carro-1.png");
  ImagemCarro2 = loadImage ("Imagens/carro-2.png");
  ImagemCarro3 = loadImage ("Imagens/carro-3.png");
  ImagemCarros = [ImagemCarro, ImagemCarro2, ImagemCarro3, ImagemCarro, ImagemCarro2, ImagemCarro3];
  somDaTrilha = loadSound ("Sons/trilha.mp3");
  somDaColisao = loadSound ("Sons/colidiu.mp3");
  somDoPonto = loadSound ("Sons/pontos.wav");
  }

