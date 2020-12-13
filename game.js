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
rocket1=createSprite(100,200);
rocket1.addImage("reading",rocket1Img);
rocket1.scale=0.2;
rocket2=createSprite(300,200);
rocket2.addImage("reading2",rocket2Img);
rocket2.scale=0.2;
rockets=[rocket1,rocket2];
}
  
play(){
form.hide();
Player.getPlayerInfo();

if(allPlayers !== undefined){
background("red");
image(bg,0,-displayHeight*4,displayWidth,displayHeight*5);    
var index=0;
var y;
var x=-50;
for(var plr in allPlayers){
index++;
x=x+500;
y=displayHeight-allPlayers[plr].distance;
rockets[index-1].x=x;
rockets[index-1].y=y;
if (index === player.index){
rockets[index-1].shapeColor="red"
camera.position.x=displayWidth/2;
camera.position.y=rockets[index-1].y;
}
}
}
  
if(keyIsDown(UP_ARROW) && player.index !== null){
player.distance +=10
player.update();
}
if(player.distance>3770){
gameState=2;
}
  
drawSprites();
}
    end(){
    console.log("GAME OVER!");  
    }
  }
  