class Block {
  constructor(x, y, color){
    var options_block = {
      'restitution':0.8,
      'friction':1.0,
      'density':1.0
    }
    this.color = color;
    stroke("white");
    strokeWeight(4);
    fill(this.color); 

    this.body = Bodies.rectangle(x, y, 50, 80, options);
    this.x = x;
    this.y = y;
    this.width = 50;
    this.height = 80;
    World.add(world, this.body);

  }
    display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      rectMode(CENTER);
      rect(this.x, this.y, this.width, this.height);
      pop();
    }
  }

