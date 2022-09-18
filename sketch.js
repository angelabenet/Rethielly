
var bg;
var tree, treeImg;
var cloud1, cloud2, cloudGroup;
var chao, chaoImg;
var rafaelImg, oliviaImg, wesImg, thauanImg;
var rafael, olivia,  thauan;
var pc, pcImg;
var gameState=1;
var stoneImg;
var pc2;








function preload(){

 cloud1=loadImage("assets/nuvens 1.png");
 cloud2=loadImage("assets/nuvens 2.png"); 
 chaoImg=loadImage("assets/chao.png");
 treeImg=loadImage("assets/arvore.png");
 pc2=loadImage("assets/finalruim.png")
 oliviaImg=loadImage("assets/olivia.png");
 rafaelImg=loadImage("assets/rafael.png");
 thauanImg=loadImage("assets/thauan.png");
 wesImg=loadImage("assets/wes.png");
 som1=loadSound("assets/finalruim1.mp3");
 som2=loadSound("assets/finalfeliz2.mp3");
 pcImg=loadAnimation("assets/andando1.png","assets/andando2.png", "assets/parado.png");
 stoneImg = loadImage("assets/stone.png")
 heartImg = loadImage("assets/h.png")

}

function setup(){

// frameRate(80)

createCanvas(1200, 600);
tree = createSprite(300, 300);
tree.addImage(treeImg);
tree.velocityY = 1;

heart = createSprite(255,50)
heart.addImage(heartImg);
heart.scale = 0.1




chao = createSprite(700,500,250,20);
chao.addImage(chaoImg);
chao.scale=1.9;

pc= createSprite( 500, 539, 15, 15);
pc.addAnimation("pc", pcImg);
pc.scale=0.1;
pc.setCollider("circle", 0,0,310)
pc.debug = true;

stoneGroup = createGroup();
cloudGroup = createGroup();


}



function draw(){
background("lightBlue");
// image(tree, 0, -height * 5, width, height * 6);


if(tree.y>400){
    tree.y = 180;
}


if (gameState===1){

textSize(25);
fill(0);
textStyle(BOLD);





if (keyDown(UP_ARROW) && pc.position.x < 388) {
pc.position.y+=-2;
}   

if (keyDown(DOWN_ARROW)) {
    pc.position.y+= 2;
    } 

if (keyDown(LEFT_ARROW)){
pc.position.x+=-2 ;
} 

if(keyDown(RIGHT_ARROW)){
    pc.position.x +=2;
}

clouds();
createBox();



if(heart.isTouching(pc)){
    winmsg();
}


if(stoneGroup.collide(pc)){
        som2.play();
         gameState = 2;
        }

}

else if(gameState === 2){

    pc.addAnimation("pc2", pc2)
    cloudGroup.setVelocityXEach(0);
    pc.visible = false;
    tree.velocityY = 0;   
    textSize(90)
    fill(255,0,0)
    textStyle(BOLD);
    text("Game Over! ", 450, 300)
    
    }

drawSprites();

}


function clouds(){

if (frameCount % 150 === 0) {
var cloud0 = createSprite(0,100,40,10);
cloud0.velocity.x=3
cloud0.position.y=random(60, 150);
cloud0.scale=0.3
var r=Math.round(random(1, 2));
switch(r){
case 1: cloud0.addImage(cloud1);
break;
case 2: cloud0.addImage(cloud2);
break;
default: break;

}
cloud0.lifetime = 390;
cloudGroup.add(cloud0);
}
}


function createBox(){

if (frameCount % 150  == 0) {
var box = createSprite(50,90,80,80);
box.addImage(stoneImg);
box.y = Math.round(random(0,150));
box.x = Math.round(random(100,400));
// box.scale = 0.5;
box.velocityY = 3;
box.lifetime = 200;
stoneGroup.add(box);




}
}

   

function winmsg(){

    textSize(70);
    fill(255,0,0);
    textStyle(BOLD);
    text("Parabéns", 450, 300);
    text("Vc ganhou o jogo ", 450, 380);
   
    som1.play();

    cloudGroup.velocityX = 0;
    stoneGroup.velocityX = 0;
    stoneGroup.velocityY = 0;

}

