'use strict';

class Polygon{
    constructor(numberOfSides,base,height){
        this.numberOfSides = numberOfSides;
        this.base = base;
        this.height = height;
    }
    
    perimeter(){
        const perimeter = this.base * this.numberOfSides;
        return perimeter;
        
    } 
    area(){
        const area = this.base * this.height
        return area;
   
    }
    
}


class Square extends Polygon{
    constructor(side){
        super(4,side, side);
        this._side = side
    }
}


class Triangle extends Polygon{
    constructor(base, height){
        super(3,base, height);
        this._base = base;
        this._height = height;
    }
    area(){
        return super.area() / 2;
    }

}
const square = new Square(10);
console.log(square._side);
console.log(square.area());
console.log(square.perimeter());
const triangle = new Triangle(4,3);
console.log(triangle.area());
console.log(triangle.perimeter());


