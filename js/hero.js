class Hero {
    constructor(x,y) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,500,250, options);
      this.image = loadImage("images/Superhero-01.png");
      World.add(world, this.body);
    }
    
    display(){
      var pos =this.body.position;
      fill("white");
      imageMode(CENTER);
      image(this.image, pos.x, pos.y, 500, 250);
    }
  }