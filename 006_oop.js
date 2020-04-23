//area of a square

function Spuare(width){
     this.width = width;
     this.height = width;

     //define the getter
     this.getArea = function(){
          return this.width * this.height;
     }

     //define the setter
     this.setArea = function(area){
          this.width = Math.sqrt(area);
          this.height = this.width;
     }

}

//define an instance of a square

let square1 = new Spuare(10);

square1.area  = 625;

console.log(square1.area.width);