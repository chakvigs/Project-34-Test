class Fly {
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 5,
            length: 200
        }
        this.pointB = pointB
        this.fly = Constraint.create(options);
        World.add(world, this.fly);
    }

    display(){
        var pointA = this.fly.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(2);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}