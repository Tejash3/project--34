class Box {
    constructor(x,y,width,height){
        var option = {
    isStactic : false,
    'density':2,
    'friction':0.5,
    'restitution':0.1
        }
        this.body = Bodies.rectangle(x,y,width,height,option);
        this.width=width;
        this.height=height;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        push()
        translate(pos.x,pos.y)
        strokeWeight(3)
        stroke('black')
        fill("orange");
        rect(0,0,this.width,this.height);
        pop()
    }
    }