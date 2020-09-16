class Ground{
    constructor(x,y,w,h){
       var options={
          isStatic:true 
       } 
       this.w=w;
       this.h=h;
       this.body=Bodies.rectangle(x,y,w,h,options);
       World.add(world,this.body);
     }   
    display(){
       rectMode(CENTER);
       fill("white"); 
       var pos=this.body.position;
       rect(pos.x,pos.y,this.w,this.h);
    }  
    }