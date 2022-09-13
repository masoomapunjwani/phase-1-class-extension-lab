// Your code here
class Polygon {
    constructor(Array) {
        this.sides = Array;
    }

    get countSides () {
        return this.sides.length;
    }

    get perimeter () {
        return this.sides.reduce((sum, side) => sum + side, 0);
    }
}

class Triangle extends Polygon {

    get isValid() {

        const check1 = this.sides[0] + this.sides[1] > this.sides[2];
        const check2 = this.sides[0] + this.sides[2] > this.sides[1];
        const check3 = this.sides[1] + this.sides[2] > this.sides[0];
        return ( check1 && check2 && check3 );
    }
}

class Square extends Polygon {

    get isValid() {
        return (this.sides[0] === this.sides[1]) && (this.sides[2] === this.sides[3]);
    }

    get area() {
        return this.sides[0] * this.sides[0];

    }
}