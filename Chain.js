// creating chain class
class Chain{
    //connecting two objects
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.04,
            length:10
        }
        //creating and adding the chain
        this.chain = Constraint.create(options);
        World.add(world,this.chain);
    }
    display(){
        //displaying the line 
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        strokeWeight(3);
        line(pointA.x, pointA.y, pointB.x,pointB.y);
    }
}