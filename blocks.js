class Block {
    constructor(x,y) {
       var options = {
         isStatic:false,
         restitution:0,
         friction:0.5,
         density:0.8
        }
      this.body = Bodies.rectangle(x, y, width/25, height/25, options);
      this.width = width;
      this.height = height;
     // this.image=loadImage("paper.png")
      
      World.add(world, this.body);
    }
    display(){
      var scor=0;
      var t=[];
      

     
      
     
      if (this.body.speed<3){
      var pos =this.body.position;
      rectMode(CENTER)
      strokeWeight(2)
      stroke("white");
      rect(pos.x,pos.y, width/25,height/25)
        //scor= t[t.length-1]
      }else{
        World.remove(world,this.body)
        
        scor=scor+1
      }

     /* if (this.body.speed===0){
       
      }*/
      t.push(this.body);
     // console.log(t[1])
      //text("blocks removed :- "+scor,0.75*width/10,height/5);
     
     // imageMode(CENTER)
      //image(this.image,pos.x,pos.y+(this.height/6),this.width,this.height)
      
     
    }
  }