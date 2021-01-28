const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload() {
  bgImage = loadImage("images/GamingBackground.png");
}

function setup() {
  createCanvas(2500, 1200);
  // create sprites here
  engine = Engine.create();
  world = engine.world;

  groundObject = new Ground(750, 800, 2500, 20);
  heroObject = new Hero(500, 350);
  monsterObject = new Monster(1800, 350);
  flyObject = new Fly(heroObject.body, {x:750, y:50});

  box1 = new Box(1000, 100, 70, 70);
  box2 = new Box(1000, 100, 70, 70);
  box3 = new Box(1000, 100, 70, 70);
  box4 = new Box(1000, 100, 70, 70);
  box5 = new Box(1000, 100, 70, 70);
  box6 = new Box(1000, 100, 70, 70);
  box7 = new Box(1000, 100, 70, 70);

  //column 2
  box8 = new Box(1100, 100, 70, 70);
  box9 = new Box(1100, 100, 70, 70);
  box10 = new Box(1100, 100, 70, 70);
  box11 = new Box(1100, 100, 70, 70);
  box12 = new Box(1100, 100, 70, 70);
  box13 = new Box(1100, 100, 70, 70);
  box14 = new Box(1100, 100, 70, 70);
  
  //column 3
  box15 = new Box(1200, 100, 70, 70);
  box16 = new Box(1200, 100, 70, 70);
  box17 = new Box(1200, 100, 70, 70);
  box18 = new Box(1200, 100, 70, 70);
  box19 = new Box(1200, 100, 70, 70);
  box20 = new Box(1200, 100, 70, 70);
}

function draw() {
  background(0);
  Engine.update(engine);

  image(bgImage, 1250, 600, 2500, 1200);

  groundObject.display();
  heroObject.display();
  monsterObject.display();
  flyObject.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();

  detectCollision(box1, monsterObject);
  detectCollision(box2, monsterObject);
  detectCollision(box3, monsterObject);
  detectCollision(box4, monsterObject);
  detectCollision(box5, monsterObject);
  detectCollision(box6, monsterObject);
  detectCollision(box7, monsterObject);
  detectCollision(box8, monsterObject);
  detectCollision(box9, monsterObject);
  detectCollision(box10, monsterObject);
  detectCollision(box11, monsterObject);
  detectCollision(box12, monsterObject);
  detectCollision(box13, monsterObject);
  detectCollision(box14, monsterObject);
  detectCollision(box15, monsterObject);
  detectCollision(box16, monsterObject);
  detectCollision(box17, monsterObject);
  detectCollision(box18, monsterObject);
  detectCollision(box19, monsterObject);
  detectCollision(box20, monsterObject);
}

function mouseDragged(){
    Matter.Body.setPosition(heroObject.body, {x: mouseX , y: mouseY});
}

function detectCollision(box,monster){
	/*var collision = Matter.SAT.collides(lstone,lmango);
	if(collision.collided){
		console.log("collided");
		Matter.Body.setStatic(lmango,false);	
	}*/
  monsterPosition=monster.body.position
  boxPosition=box.body.position
  
  var distance=dist(boxPosition.x, boxPosition.y, monsterPosition.x, monsterPosition.y)
  //console.log(distance)
 // console.log(lmango.r+lstone.r)
  	if(distance<=monster.x+box.x) {
      //console.log(distance);
  	  Matter.Body.setStatic(monster.body,false);
    }
  }