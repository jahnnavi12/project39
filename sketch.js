var canvas;
var database;
var gameState = 0;
var playerCount;
var allPlayers;
var form, player, game;
var rocket1,rocket2,rockets,rocket1Img,rocket2Img,bg;
var distance = 0;

function preload(){ 

rocket1Img=loadImage("rocket.png");
rocket2Img=loadImage("rocket.png");
bg=loadImage("bg.jpg");
}

function setup(){
canvas = createCanvas(displayWidth-20,displayHeight-30);
database = firebase.database();

game = new Game();
game.getState();
game.start();
}
function draw(){
if(playerCount === 2){
    game.update(1);
  }
if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState===2){
    game.end(); 
   }
}

