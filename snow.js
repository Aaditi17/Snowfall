class Snow {
    constructor(x,y){
      var options ={
          restitution : 0.1,
          friction : 0.001,
          isStatic : false,
          velocityY : 1 
      }

      this.snow = Bodies.circle(x,y,10,options)
      this.radius = 10
      this.image = loadImage("snow4.webp")
      World.add(world, this.snow)
    }

    display(){
        var pos = this.snow.position
        imageMode(CENTER)
        image(this.image, pos.x, pos.y, this.radius, this.radius)

    }

    updateY(){
        if(this.snow.position.y > height ){
            Body.setPosition(this.snow,{x : random(0,700), y: random(0,350)})
        }
    }

    

    
}