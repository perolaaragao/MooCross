function setup() {
  createCanvas(500, 400);
  somDaTrilha.loop();
}

function draw() {
  background(ImagemDaEstrada);
  MostraAtor ();
  MostraCarro ();
  MovimentaCarro ();
  MovimentaAtor ();
  VoltaInicialCarro ();
  passouTodaATela ();
  VerificaColisao ();
  IncluiPontos ();
  MarcaPonto ();
}
