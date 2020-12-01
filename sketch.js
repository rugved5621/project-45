var hero



function preload(){
  heroImage=loadImage("hero img.jpg")

}
function setup(){
  createCanvas(800,400)
  hero=createSprite(50,300)
  hero.addImage(heroImage)
  hero.scale=0.5
  ground=createSprite(400,390,800,10)
}
function draw(){
  background("white")
  hero.collide(ground)
  if(keyDown ("space")){
    hero.velocityY=-10
  }
  hero.velocityY=hero.velocityY+0.8



  drawSprites()
}