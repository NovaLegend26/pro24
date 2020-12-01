class Paper {
constructor(x,y,angle){
    var options = {
        'restitution':0.3,
        'friction':0.5,
        'density':1.2
    }
    this.body = Matter.Bodies.circle(x, y, 50, options);
    this.radius = 50
    World.add(world, this.body);
  }
  display(){
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    fill("white")
    circle(0,0,this.radius);
    pop();
  }
}