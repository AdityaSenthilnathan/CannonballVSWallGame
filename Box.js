class Box  {
  constructor(x,y,width,height) {
    var options = {
        isStatic: false
    }
    this.body = Matter.Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    this.img = loadImage('sprites/brick.png');
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
   
   
    image(this.img, pos.x, pos.y, this.width, this.height);
    //rect(pos.x, pos.y, this.width, this.height);
  }
  };