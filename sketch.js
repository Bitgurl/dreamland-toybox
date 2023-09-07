let song;
let glitch;
let bearPic;
let clownPic;
let helloPic;
let rainbwPic;
let teddyPic;
let playpen;
let images = [];

let numOfImages = 1;

function preload() {
  bearPic = loadImage("bear.png");
  clownPic = loadImage("clown.png");
  helloPic = loadImage("hello.png");
  rainbwPic = loadImage("rainbw.png");
  teddyPic = loadImage("teddy.png");
  playpen = loadImage("playpen.gif");

  song = loadSound('fastmix.mp3');
}





function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);

 


  for (let i = 0; i < numOfImages; i++) {
    images[i] = new Images();
    
    
    
  }

}

function draw() {

  

  
  
  let x;

  //buttons
  image(playpen, width / 2, height / 2, width, height);

  image(bearPic, 250, 300, 400, 400);

  image(rainbwPic, 100, 600, 400, 300);
  
  image (clownPic, 600,200, 150,150);

  for (let i = 0; i < numOfImages; i++) {

    images[i].display();
    images[i].move();





    songButton();


  }
}



class Images {

  constructor() {


    this.x = random(width -200);
    this.y = random(height -200);
    this.c = color(random(255), random(255), random(255));
  }



  display() {

    //image(clownPic, this.x, this.y, 200, 200);
    image(helloPic, this.x, this.y, 300, 200);
    // image(rainbowPic,this.x,this.y,200,200);


  }

  move() {
    this.x = this.x + random(-1, 1.5);
    this.y = this.y + random (-1,1.5);
  }

}

function songButton() {
  if (mouseIsPressed == true && mouseX > 150 && mouseX < 300 && mouseY > 180 && mouseY < 375)

    if (song.isPlaying()) {

      song.stop();

    } else {
      song.play();

    }
}