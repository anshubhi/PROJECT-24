class Dustbin {
constructor(x,y,width,height){

    var opt = {
isStatic:true


    }


this.Dustbin = Bodies.rectangle(x,y,width,height,opt);
this.width = width
this.height = height


World.add(world,this.Dustbin);
}




display (){

var pos = this.Dustbin.position
fill("red")
rectMode(CENTER)
rect(pos.x,pos.y,this.width,this.height);






}

}