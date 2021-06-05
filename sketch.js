var canvas, backgroundImage;
var allPlayers;

var gameState = 0;
var playerCount;

var database;

var form, player, game,index;

var robots, robo1, robo2;

var fuel=30;
var score=0;

function preload(){
  trackImg=loadImage("boxing-ring-arena-floodlights_34982-129.jpg");
  roboImg=loadImage("robo1.jpg");
  robo2Img=loadImage("robo2 finall.jpg");
}


function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount===2){
    game.update(1);
  }

  if(gameState===1){
    clear();
    game.play();
  }
}
