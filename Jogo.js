var x, y;
var vida;
var pontuação;
var tempo;
var tela;
var v, t;
var xd, yd;
var missile;
var bg;
var nave;
var img;
var xj;
var yj;
var disparo;
var pontuação = 0;


function preload(){
  img = loadImage("assets/239.jpg");
  nave = loadImage("assets/nave.jpg");
  bg = loadImage("assets/bg1.jpg");
  missile = loadImage("assets/missile.jpg");
}

function setup() {
    createCanvas(1200, 650);
    tempo = 0;
    vida = 3;
    tela = 1;
    xj = 50;
    yj = 340;  
    xd = xj;  
    yd = yj; 
 frameRate(30); 
}


function draw(){

if(tela==1){
  background(bg);
  fill(255, 255, 255);
  textSize(100);
  textFont ("Andalus");
  text("STAR  TRIP", 400,162);
  if (keyIsDown(ENTER)){
    tela = 2;
  }
}

if(tela==2){
 tempo++
 background(img);

 if (keyIsDown(UP_ARROW)){
    if(yj>0){ 
      yj-=5;
    }
    }
 if (keyIsDown(DOWN_ARROW)) {
    if(yj<height){ 
      yj+=5;
      }
    }
 if (keyIsDown(LEFT_ARROW)) {
    if(xj>10){ 
     xj-=5;
    }
  }
if (keyIsDown(RIGHT_ARROW)) {
  if(xj<1000){ 
    xj+=5;
    }
  }
    if (keyIsDown(CONTROL) && (! disparo) ){ 
      disparo = true; 
      xd = xj;
      yd = yj; 
    }
    if (disparo) {
      xd = xd + 30;
      if (xd > width) {
        disparo = false; 
      }
    }
    if (disparo) {
      image(missile,xd,yd,20,30);
    }

    image(nave, xj, yj, 92, 27);
    
    if(vida==0){
      tela = 3
    }
  

 textFont ("Andalus");
textSize(32); 
fill(255, 255, 255);
text("Vidas: " + vida, 280, 30);
fill(255, 255, 255);
text("Segundos: "+(Math.floor(tempo/60)), 500, 30);
fill(255, 255, 255);
text("Pontuação: " + pontuação, 10, 30);
  }
  
if(tela==3){
  background(0);
  fill(255, 255, 162);
  textSize(50);
  textFont ("Andalus");
  text("WASTED", 300, 300);
  if (keyIsDown(ENTER)){
    tela = 2;
  }
}
}