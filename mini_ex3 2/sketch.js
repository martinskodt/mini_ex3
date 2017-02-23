var stop = 250; //variabler
var farve1 = 100;
var farve2 = 0;
var farve3 = 0;
var streg1 = { 
  position_x : 250,
  position_y : 250,
  omgang : 0.5,
  diameter : 1,
  }
function setup() {
 createCanvas(500,500)
 background(50)
}

function draw() {
 textSize(40)
 noStroke()
 text("L O A D I N G",width/4,50)
 
//farve1 = map(streg1.omgang,1,350,255,0) // mappe farverne
//farve2 = map(streg1.omgang,1,100,0,255)
farve3 = map(streg1.omgang,100,350,255,0)
 fill(farve2,farve1,farve3,farve1)
 
noStroke() //tegne cirken
 ellipse(streg1.position_x,streg1.position_y,streg1.diameter,streg1.diameter);
 // cirkel formel x og y aksen
 streg1.position_x = streg1.position_x + streg1.omgang * cos(frameCount * 3,14 * 0.001)
 streg1.position_y = streg1.position_y - streg1.omgang * sin(frameCount * 3,14 * 0.001)
 // lav rotation ud af og cirkel større
 streg1.omgang = streg1.omgang + 0.5;
 streg1.diameter = streg1.diameter + 0.065;
 console.log(streg1.omgang);
 
 if(streg1.omgang > stop){ // reset
  streg1.omgang = 0
  farve1 = random(0,255)
  farve2 = random(0,255)
  farve3 = 0
  streg1.position_x = 250
  streg1.position_y = 250
  streg1.diameter = 5
  background(50)
 }
}