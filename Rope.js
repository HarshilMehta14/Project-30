class Rope
{
    constructor(body1,pointb)
    {
        var option_constraint = 
        {
            bodyA : body1,
            pointB : pointb,
            stiffness : 0.04,
            length : 10,
        }
        this.body = Constraint.create(option_constraint);
        World.add(world,this.Sling);
        this.image = loadImage("polygon.png");

    }
    display()
    {
        var pointA = this.Sling.bodyA.position;
        var pointB = this.Sling.pointB;

        stroke(255);
        strokeWeight(8);
        line(pointA.x-20,pointA.y,pointB.x-10,pointB.y);
        line(pointA.x-20,pointA.y,pointB.x+20,pointB.y);
    }
        
    fly()
    {
        this.Sling.bodyA = null;
    }
}