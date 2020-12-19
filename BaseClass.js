class BaseClass {
    constructor(x, y,width,height,anule) {
      var options = {
        'density':1.5,
        'friction': 2.0,
        'restitution':0.3
      };
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.image = loadImage("sprites/base.png");
    };
    display(){
      var angle = this.body.angle;
  
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER)
      image(this.image,0, 0, this.width, this.height);
      pop();
    };
  };