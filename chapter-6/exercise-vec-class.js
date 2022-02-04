class Vec {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    plus(vec){
       let x = this.x + vec.x;
       let y = this.y + vec.y;
       let newVector = new Vec(x, y);
       return newVector;
    }
    minus(vec){
        let x = this.x - vec.x;
        let y = this.y - vec.y;
        return new Vec(x, y);
    }
    get length(){
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }
}

console.log(new Vec(1, 2).plus(new Vec(2, 3)));
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
console.log(new Vec(3, 4).length);