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
        this.Sling = Constraint.create(option_constraint);
        World.add(world,this.Sling);
        this.image = loadImage("polygon.png");

    }
    display()
    {
        
        if(this.Sling.bodyA){
        var pointA = this.Sling.position;
        var pointB = this.Sling.pointB;

        stroke(255);
        strokeWeight(8);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
    }
        
    fly()
    {
        this.Sling.bodyA = null;
    }
}