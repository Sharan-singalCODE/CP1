class Ground {
    constructor(x, y) {
      var options = {
          isStatic:true,
          restitution:0.3,
          friction:0.5,
          density:1.0
      }
      this.body = Matter.Bodies.rectangle(x, y,700,20, options);

      
      World.add(world, this.body);
    }
    display(){
      rectMode(CENTER);
      fill(255);
      strokeWeight(4)
      stroke("RED")
      rect(400,700,700,20);

    }
  };
  