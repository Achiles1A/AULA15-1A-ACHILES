//preparar e rodar um código
function setup() {
  createCanvas(400, 400);//criar tela
  background("red");
}

//responsável por desenhar
function draw() {
  stroke("rgb(251,255,0)");
  fill("blue");

  if(mouseIsPressed){
    rect(mouseX, mouseY, 40, 40);
  }
}