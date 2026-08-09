/*
=> Bad LSP Example:
    This example violates LSP because the subclass (Square) does not behave consistently with its 
    superclass (Rectangle).
*/

class Rectangle {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
  
    setWidth(width) {
      this.width = width;
    }
  
    setHeight(height) {
      this.height = height;
    }
  
    getArea() {
      return this.width * this.height;
    }
}
  
// Subclass
class Square extends Rectangle {
    setWidth(width) {
      this.width = width;
      this.height = width; // Square enforces equal sides
    }
  
    setHeight(height) {
      this.height = height;
      this.width = height; // Square enforces equal sides
    }
}
  
// Usage:
const rectangle = new Rectangle(4, 5);
console.log(rectangle.getArea()); // 20
  
const square = new Square(4, 4);
square.setWidth(5);
console.log(square.getArea()); // 25, but setting width changes height, breaking expected behavior
  
/*
==> Problems:
    1)  Substituting a Square for a Rectangle breaks the expected behavior because setting width affects 
        height, which violates the principle.
        
    2)  Code that relies on Rectangle's behavior cannot handle Square correctly.
*/
