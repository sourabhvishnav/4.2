class Box{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.1,
            'friction':0.1,
            'density':1.2
        }
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
        this.Visiblity = this.Visiblity - 5;  
        score++;      
  }
      }
  }