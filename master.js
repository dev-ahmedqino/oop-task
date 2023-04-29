// Answer No (1) : 
class Shape {
    constructor(_color,_fontWeight) {
        this.color = _color;  // answer point (a)
        this.fontWeight = _fontWeight; // answer point (b)
   }
get print() {
    console.log(`The Color is ${this.color} and the FontWeight is ${this.fontWeight}`) // answer point (c)
}
static hello = () => {
    return 'hello this is oop example using java script'; 
}
}

let shape1 = new Shape("red","bold")

console.log(shape1); // instance
shape1.print; // answer point (c also)
console.log(Shape.hello()); // answer point (d)


//------------------------------------------------------------------------------------------ 

// Answer No (2) : 

class Rectangle extends Shape {
    constructor(_width,_height,_color,_fontWeight) {
        super(_color,_fontWeight);
    this.width = _width; // answer point (a)
    this.height = _height; // answer point (b)
    this.area = _width * _height //area calculation 
    }
get printArea() {
    console.log(`The Rectangle Area is equal ${this.area}`); // answer point (c) 
};
}

let rectangle1 = new Rectangle (20,20,"red","bold"); // instance

console.log(rectangle1);
console.log(rectangle1.printArea); 

//---------------------------------------------------------------

// Answer No (3) : 

class Circle extends Shape {
    constructor(_number,_center,area,_color,_fontWeight) { 
        super(_color,_fontWeight,area); 
        this.number = _number; // answer point (a)
        this.center = _center; // answer point (b)
    }
get printCircleData() { // answer point (c)
    return `The Circle color is ${this.color}, the font weight is ${this.fontWeight}, the number is ${this.number} and the center is ${this.center}`
};
};  
let circle1 = new Circle (1,0,400,"red","bold"); // instance

console.log(circle1);
console.log(circle1.printCircleData); 