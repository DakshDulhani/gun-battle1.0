
var bg
var screen
var steve, steveImg,rightarm1,rightarm1Img,leftarm1,leftarm1Img
var steve_copy , steve_copyImg
var explosion, explosionAnimation
var explosionSound
function preload(){
bg = loadImage("assets/background.png")
explosionSound = loadSound("assets/category_explosion/explosion.ogg")
steveImg =  loadImage("assets/steve.png")
steve_copyImg =  loadImage("assets/steve_copy.png")
explosionAnimation = loadAnimation("assets/sprite_0.png","assets/sprite_1.png","assets/sprite_2.png",
"assets/sprite_3.png","assets/sprite_4.png","assets/sprite_5.png","assets/sprite_6.png")
rightarm1Img = loadImage("assets/rightarm_1.png")
leftarm1Img = loadImage("assets/leftarm_1.png")
}



function setup(){
createCanvas(windowWidth -20, windowHeight-100)
screen = createSprite(765,320,windowWidth, windowHeight-100)
screen.addImage("scenery",bg)
screen.scale= 2.15

steve = createSprite(850,500,20,20)
steve.addImage("aiming",steveImg)
steve.scale = 0.7;

steve_copy =createSprite(650,500,20,20)
steve_copy.addImage("aiming_copy",steve_copyImg)
steve_copy.scale = 0.7;

rightarm1 = createSprite(850,500,10,10)
rightarm1.addImage("R1",rightarm1Img)
rightarm1.scale=0.4

leftarm1 = createSprite(650,500,10,10)
leftarm1.addImage("L1",leftarm1Img)
leftarm1.scale=0.4
}

function draw(){
background("blue")

if(keyWentDown("j")){
    explosion= createSprite(700,200,20,20)
    explosion.addAnimation("boom",explosionAnimation)
    explosionSound.play()
}

if(keyWentUp("j")){
    explosion.visible = false;
}


drawSprites();
}