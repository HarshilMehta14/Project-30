const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var polygon;
var mainGround, ground1, ground2;

var block1_1;
var block2_1, block2_2, block2_3;
var block3_1, block3_2, block3_3, block3_4, block3_5;
var block4_1, block4_2, block4_3, block4_4, block4_5, block4_6, block4_7;

var box1_1;
var box2_1, box2_2, box2_3;
var box3_1, box3_2, box3_3, box3_4, box3_5;

var rope;
var polyImage;

function preload(){
    polyImage = loadImage("polygon.png");
}
function setup(){
    var canvas = createCanvas(1300,700);

    engine = Engine.create();
    world = engine.world;

    var poly_options = {
        restitution:0.7,

    }
    poly = Bodies.circle(200,450, 25);
    World.add(world, poly);

    rope = new Rope(poly,{x:200, y:450});

    mainGround = new Ground(width/2, 690, 1200, 20);
    ground1 = new Ground(600, 500, 400, 10);
    ground2 = new Ground(1050, 340, 300, 10);

    block4_1 = new Block(425, 475);
    block4_2 = new Block(475, 475);
    block4_3 = new Block(525, 475);
    block4_4 = new Block(575, 475);
    block4_5 = new Block(625, 475);
    block4_6 = new Block(675, 475);
    block4_7 = new Block(725, 475);

    block3_1 = new Block(475, 425);
    block3_2 = new Block(525, 425);
    block3_3 = new Block(575, 425);
    block3_4 = new Block(625, 425);
    block3_5 = new Block(675, 425);

    block2_1 = new Block(525, 375);
    block2_2 = new Block(575, 375);
    block2_3 = new Block(625, 375);

    block1_1 = new Block(575, 325);

    box3_1 = new Block(950, 315);
    box3_2 = new Block(1000, 315);
    box3_3 = new Block(1050, 315);
    box3_4 = new Block(1100, 315);
    box3_5 = new Block(1150, 315);

    box2_1 = new Block(1000, 290);
    box2_2 = new Block(1050, 290);
    box2_3 = new Block(1100, 290);

    box1_1 = new Block(1050, 265);

    console.log(poly)
}

function draw(){
    background("#3C2E2E");

    Engine.update(engine);

    mainGround.display();
    ground1.display();
    ground2.display();

    imageMode(CENTER);
    image(polyImage, poly.position.x, poly.position.y, 50,50);

    rope.display(poly.body, {x:200, y:450});
    
    fill("#807D78");
    block1_1.display();

    fill("#00E4D0");
    block2_1.display();
    block2_2.display();
    block2_3.display();

    box1_1.display();

    fill("#FFBEC4");
    block3_1.display();
    block3_2.display();
    block3_3.display();
    block3_4.display();
    block3_5.display();

    box2_1.display();
    box2_2.display();
    box2_3.display();

    fill("#67D1EA");
    block4_1.display();
    block4_2.display();
    block4_3.display();
    block4_4.display();
    block4_5.display();
    block4_6.display();
    block4_7.display();

    box3_1.display();
    box3_2.display();
    box3_3.display();
    box3_4.display();
    box3_5.display();

}
function mouseReleased()
{
    rope.fly();
}

function mouseDragged()
{
    Matter.Body.setPosition(poly,{x: mouseX, y: mouseY});
}

function keyPressed()
{
    if(keyCode === 32)
    {
        rope.attach(poly);

    }
}