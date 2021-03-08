class Hero{
    constructor(x,y,width,height){
      var options ={
    //isStatic:false
      friction:0.4,
      density:3,
     restitution:1.2,
  }
      

      this.width = width;
      this.height = height;
      this.image = loadImage("Superhero-01.png")
      this.body =  Bodies.rectangle(x,y,width,height,options);
      World.add(world,this.body);
    }
    display()
    {
        
        imageMode(CENTER);
        image(this.image,this.body.position.x, this.body.position.y,this.width, this.height);
    }
}
