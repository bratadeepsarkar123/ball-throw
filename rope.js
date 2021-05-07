class Line{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.03,
            length:10
        }
        this.pointB = pointB
        this.Line= Constraint.create(options);
        this.color= 255;
        World.add(world, this.Line);
    }
     attach(body){
        this.Line.bodyA=body;
        }
     fly(){
         this.Line.bodyA=null  

        }
        


      display(){
         if(hour>= 6 && hour<=18){
             this.color=20
         }
        

          if(this.Line.bodyA){
            var pointA = this.Line.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            stroke(this.color)
            line(pointA.x, pointA.y, pointB.x, pointB.y);
         }
    }
    
                                    
    
}