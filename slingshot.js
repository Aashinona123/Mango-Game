class Slingshot {
    constructor(b1, pt) {
        var options = {
            length: 1,
            stiffness: 0.004,
            bodyA: b1,
            pointB: pt
        }
        this.sling = cons.create(options)
        World.add(world, this.sling);
    }

    fly() {
        this.sling.bodyA = null
    }

    display() {
        if (this.sling.bodyA) {
            var p1, p2

            stroke("#301608")
            p1 = this.sling.bodyA.position
            p2 = this.sling.pointB
            line(p1.x, p1.y, p2.x, p2.y)
        }
    }
}