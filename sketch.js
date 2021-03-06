const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1;
var box1
var score=0




function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    stand = new Ground(390, 298, 300, 10);
    stand2 = new Ground(700, 260, 210, 10);


  box1 = new Box(300,275,30,40)
  box2 = new Box(330,275,30,40)
  box3 = new Box(360,275,30,40)
  box4 = new Box(390,275,30,40)
  box5 = new Box(420,275,30,40)
  box6 = new Box(450,275,30,40)
  box7 = new Box(480,275,30,40)
  box8 = new Box(330,235,30,40)
  box9 = new Box(360,235,30,40)
  box10 = new Box(390,235,30,40)
  box11 = new Box(420,235,30,40)
  box12 = new Box(450,235,30,40)
  box13 = new Box(360,195,30,40)
  box14 = new Box(390,195,30,40)
  box15 = new Box(420,195,30,40)
  box16 = new Box(390,155,30,40)


  box17 = new Box(630,235,30,40)
  box18 = new Box(660,235,30,40)
  box19 = new Box(690,235,30,40)
  box20 = new Box(720,235,30,40)
  box21 = new Box(750,235,30,40)
  box22 = new Box(660,195,30,40)
  box23 = new Box(690,195,30,40)
  box24 = new Box(720,195,30,40)
  box25 = new Box(690,155,30,40)
  polygon =new Polygon(100,210,10)
  slingShot = new SlingShot(polygon.body,{x:100,y:200})








}

function draw(){
    background(0);
    fill ("white")
    textSize(20)
    text ("Score: "+score,300,50)
    Engine.update(engine);
    ground.display();
    stand.display();
    stand2.display();

 box1.display()
 box2.display()
 box3.display()
 box4.display()
 box5.display()
 box6.display()
 box7.display()
  box8.display()
  box9.display()
  box10.display()
  box11.display()
  box12.display()
  box13.display()
  box14.display()
  box15.display()
  box16.display()

  box17.display()
  box18.display()
  box19.display()
  box20.display()
  box21.display()
  box22.display()
  box23.display()
  box24.display()
  box25.display()
  polygon.display();
  slingShot.display();


}
function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingShot.fly();
}

function keyPressed(){
  if(keyCode===32){
    slingShot.attach(polygon.body)
  }

}