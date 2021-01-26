


var cat,catImg1,catImg2,catImg3,catImg4
var mouse,mouseImg1,mouseImg2,mouseImg3,mouseImg4
var bkgrd,bkgrdImg
function preload() {
    //load the images here
 catImg1= loadAnimation("images/tomOne.png")
 catImg2= loadAnimation("images/tomTwo.png")
 catImg3= loadAnimation("images/tomThree.png")
 catImg4= loadAnimation("images/tomFour.png")
 mouseImg1= loadAnimation("images/jerryOne.png")
 mouseImg2= loadAnimation("images/jerryTwo.png")
 mouseImg3= loadAnimation("images/jerryThree.png")
 mouseImg4=loadAnimation("images/jerryFour.png")
 bkgrdImg= loadImage("images/garden.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
  bkgrd= createSprite(width/2,height/2);
  bkgrd.addImage(bkgrdImg)
  

  cat= createSprite(850,600,1000,20)
  cat.addAnimation("cat",catImg1)
  cat.scale= 0.3;
  cat.setCollider("rectangle",0,0,1100,300)
  //cat.debug= true

  mouse= createSprite(50,608,40,20)
  mouse.addAnimation("mouse",mouseImg2)
  mouse.scale=0.1;
  mouse.setCollider("rectangle",0,0,300,500)
  //mouse.debug= true
}

function draw() {
  background("white");
   keyPresed();
   
   if(cat.x + mouse.x < (cat.width - mouse.width)/2){
    cat.velocityX=0;
    cat.addAnimation("endcat",catImg4)
    cat.changeAnimation("endcat",catImg4)
    mouse.addAnimation("endmouse",mouseImg4)
    mouse.changeAnimation("endmouse",mouseImg4)
   }

   console.log(cat.x)
    
   text(mouseX + ',' + mouseY, 10, 45)
    drawSprites();
}



function keyPresed(){

  //For moving and changing animation write code here
  if(keyCode===LEFT_ARROW){
     cat.velocityX= -5;
     cat.addAnimation("catRunning",catImg2) ; 
     cat.changeAnimation("catRunning",catImg2) ;

     mouse.addAnimation("mouse1",mouseImg3)
     mouse.changeAnimation("mouse1",mouseImg3)
     return true;
}
  else{
    return false;
  }

}
