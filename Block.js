class Block {
  constructor(x, y, color){
    var options_block = {
      'restitution':1,
      
    }
    this.body = Bodies.rectangle(x, y, 50, 50, options_block);
    this.x = x;
    this.y = y;
    
    this.width = 50;
    this.height = 50;
    World.add(world, this.body);

  }
    display(){
      var angle = this.body.angle;

      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      
      stroke("white");
      strokeWeight(4);

      rectMode(CENTER);
      rect(0,0, this.width, this.height);
      pop();
    }
  }

