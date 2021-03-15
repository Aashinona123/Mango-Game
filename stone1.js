class Stone{
    constructor(x, y,diametre) {
        var options = {
            'restitution':0.5,
            'friction':1.0,
            'density':1.5,
        }
        this.body = Bodies.circle(x, y, diametre, options);
        this.diametre=diametre;
        this.image = loadImage("images/stone.png");
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.diametre, this.diametre);
        pop();
      }
}