class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

    //robo1=createSprite(100,200);
    //robo1.addImage("robot",roboImg);
    //robo2=createSprite(300,200);
    //robo2.addImage("robots",robo2Img);
    //robots=[robo1,robo2];
    
  }

  play(){
    form.hide();
    robo1=createSprite(600,500);
    robo1.addImage("robot",roboImg);
    robo1.scale=0.5;
    robo2=createSprite(400,500);
    robo2.addImage("robots",robo2Img);
    robo2.scale=0.5;
    robots=[robo1,robo2];
    //textSize(30);
    //text("GAME START",100,100);
    
    Player.getPlayerInfo();

    if(allPlayers!==undefined){
      background("yellow");
      image(trackImg, 0,-displayHeight,displayWidth,displayHeight*2);
      //var dp=130;
      var index=0;
      var x=0;
      var y;
      for(var pl in allPlayers){
        index+=1;
        x+=200;
        y=displayHeight-allPlayers[pl].distance;
        robots[index-1].x=x;
        robots[index-1].y=y;
        if(index===player.index){
          robots[index-1].shapeColor="red";
          camera.position.x=displayWidth/2;
          camera.position.y=cars[index-1].y;
        }
      }
    }

    if(keyIsDown(UP_ARROW) && player.index!==null){
      player.distance+=10;
      player.update();

    }

    drawSprites();
  }

  end(){
    console.log("game ended");
    //console.log(player.rank);
  }
}
