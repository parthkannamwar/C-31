class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeimg=loadImage("sprites/smoke.png");
    this.trail=[];
  }

  display() {

    if(this.body.position.x>200 && this.body.velocity.x>10)
    {
      var pos = [this.body.position.x,this.body.position.y]
      this.trail.push(pos)
    }

    for(var i=0; i<this.trail.length; i=i+1)
    {
      image(this.smokeimg, this.trail[i][0], this.trail[i][1])
    }
  
    super.display();
  }
}
