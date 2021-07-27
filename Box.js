class Box {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':0.3,
          
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.visibility=255

      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle= this.body.angle;
      push()
      translate(pos.x,pos.y)
      rotate(angle)
      rectMode(CENTER);
      fill(255);
      if(this.body.speed<4){
      rect(0,0, this.width, this.height);
      }
      else{
World.remove(world,this.body)
this.visibility=this.visibility-10
if(this.visibility<250 && this.visibility>0){
  score=score+1

}
      }

      pop();
    }
  };