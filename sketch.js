const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload() {
//preload the images here
}

function setup(){
  createCanvas(1400,600);
  engine = Engine.create();
	world = engine.world;
  // create sprites here
  hero = new Hero(200,300,400,200)

  floor = new Floor(40,450,700,30)

  floor2 = new Floor2(850,460,100,10)

  monster = new Monster(920,350,200,200)

  box1 = new Box (500,400,40,50)
  box2 = new Box (540,400,40,50)
  box3 = new Box (580,400,40,50)
  box4 = new Box (620,400,40,50)

  box5 = new Box (620,350,40,50)
  box6 = new Box (580,350,40,50)
  box7 = new Box (540,350,40,50)
  box8 = new Box (500,350,40,50)

  box9 = new Box (500,300,40,50)
  box10 = new Box (540,300,40,50)
  box11 = new Box (580,300,40,50)
  box12 = new Box (620,300,40,50)

  box13 = new Box (500,250,40,50)
  box14 = new Box (540,250,40,50)
  box15 = new Box (580,250,40,50)
  box16 = new Box (620,250,40,50)

  box17 = new Box (500,200,40,50)
  box18 = new Box (540,200,40,50)
  box19 = new Box (580,200,40,50)
  box20 = new Box (620,200,40,50)

  box21 = new Box (500,150,40,50)
  box22 = new Box (540,150,40,50)
  box23 = new Box (580,150,40,50)
  box24 = new Box (620,150,40,50)

  box25 = new Box (540,100,40,50)
  box26 = new Box (580,100,40,50)
  box27 = new Box (560,50,40,50);

  slingshot = new Slingshot(hero.body,{x:400, y:100});



}

function draw() {
  background("skyblue")

hero.display();
floor.display();
floor2.display();
monster.display();

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

box21.display();
box22.display();
box23.display();
box24.display();

box25.display();
box26.display();
box27.display();

slingshot.display()


}

function mouseDragged(){
  Matter.Body.setPosition(hero.body, {x: mouseX , y: mouseY})
}
