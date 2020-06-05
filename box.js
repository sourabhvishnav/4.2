class Box{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.1,
            'friction':0.1,
            'density':1.2
        }
        this.img = loadImage("boximg.png")
  this.body = Bodies.rectangle(x,y,width,height,options);
  this.width = width;
  this.height = height;
  this.color ="white"; 
  this.Visiblity = 255;   
  World.add(world,this.body);
}
 display(){
     if(this.body.speed<5){
     var pos = this.body.position;
     rectMode(CENTER);
     fill(this.color);
     rect(pos.x,pos.y,this.width,this.height);
     }
     else{
        World.remove(world, this.body);
        push();
        this.Visiblity = this.Visiblity - 10;  
        tint(255,this.Visiblity);
        image(this.img, this.body.position.x, this.body.position.y, 50, 50);
        pop();
        score++;      
  }
      }
  }