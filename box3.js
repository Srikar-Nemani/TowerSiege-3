class Box3{
    constructor(x, y, width, height) {
        var options = {
            'restitution':1.0,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.x=x;
        this.y=y;
        this.width = width;
        this.height = height;
        this.Visibility = 255;
        World.add(world, this.body);
      }
      score(){
        if(this.visibility<0 && this.visibility>-105){
          score++;
        }
      }
      display(){
          if(this.body.speed < 3){
            
            var pos =this.body.position;     
            rectMode(CENTER);
            fill("yellow");
            strokeWeight(1);
            stroke("black");
            rect(pos.x, pos.y, this.width, this.height);
            

          }
          else{
            push();
            World.remove(world,this.body);
            
            this.Visibility -= 5;
            tint(255,this.Visibility);
            rect(0, 0, this.width, this.height);
            pop();    
          }
       
        
    }
}