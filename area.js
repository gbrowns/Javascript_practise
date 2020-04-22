//program to cumpute area  of a cuboid

//cross-section area
function surfaceArea(length, width) {
      this.length = length;
      this.width = width;
}

//method to compute surface area
surfaceArea.prototype.getCArea = function () { return (this.length * this.width); }

//define an object
var cuboid1 = new surfaceArea(100, 50);

console.log(cuboid1.getArea());

//volume
function volume(length,width,height){
      this.length = length;
      this.width = width;
      this.height = height;
}

var cuboid = new volume(70,50,20);

//method to getHeight
volume.prototype.getHeight = function(){return this.height;};

cuboid.__proto__.__proto__ = surfaceArea.prototype;


console.log(cuboid.getHeight() * cuboid.getCArea());
