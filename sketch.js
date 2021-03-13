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

var color;

function setup(){
    var canvas = createCanvas(1200,700);

    mainGround = new Ground(width/2, 690, 1200, 20);
    ground1 = new Ground(800, 500, 400, 10);
    ground2 = new Ground(1000, 340, 300, 10);

    color = ("#67D1EA");
    block4_1 = new Block(625, 415);
    block4_2 = new Block(675, 415);
    block4_3 = new Block(725, 415);
    block4_4 = new Block(875, 415);
    block4_5 = new Block(925, 415);
    block4_6 = new Block(955, 415);
    block4_7 = new Block(1025, 415);

    //box3_1 = new Block()

    color = ("#FFBEC4");
    block3_1 = new Block(675, 335);
    block3_2 = new Block(625, 335);
    block3_3 = new Block(725, 335);
    block3_4 = new Block(775, 335);
    block3_5 = new Block(825, 335);

    
    
    color = ("#00E4D0");
    block2_1 = new Block(725, 255);
    block2_2 = new Block(775, 255);
    block2_3 = new Block(825, 255);

    color = ("#807D78");
    block1_1 = new Block(775, 175);
}

function draw(){
    background("#3C2E2E");

    Engine.update(engine);

    block1_1.display();

    block2_1.display();
    block2_2.display();
    block2_3.display();

    block3_1.display();
    block3_2.display();
    block3_3.display();
    block3_4.display();
    block3_5.display();

    block4_1.display();
    block4_2.display();
    block4_3.display();
    block4_4.display();
    block4_5.display();
    block4_6.display();
    block4_7.display();

}