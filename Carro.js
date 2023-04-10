//código do carro
let yCarros = [40, 96, 150, 210, 270, 318];
let velocidadeCarros = [2, 2.5, 3.2, 5, 3.3, 2.3];
let xCarros = [600, 600, 600, 600, 600, 600];
let comprimentoCarro = 50;
let alturaCarro = 40;

function MostraCarro () {
  for (let i = 0; i < ImagemCarros.length; i++) {
    image(ImagemCarros [i], xCarros [i], yCarros [i], comprimentoCarro, alturaCarro);
  }
}

function MovimentaCarro () {
  for (let i = 0; i < ImagemCarros.length; i++){
    xCarros[i] -= velocidadeCarros[i];
}
}

function VoltaInicialCarro () {
  for (let i = 0; i < ImagemCarros.length; i++){
    if (passouTodaATela(xCarros[i])){
      xCarros[i] = 600;
  }
}
}

function passouTodaATela(xCarro){
  return xCarro < - 50;
}