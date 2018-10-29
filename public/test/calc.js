




var App = {
    calcuArea :calcuArea
  }




function myFunction() {
  
    var length = prompt("Enter a whole number for the length of your rectangle.");
    var width = prompt ("Enter a whole number for the width of your rectangle.");
    var depth= prompt ("Enter a whole number for the depth of your rectangle prism");
    calcuArea(length,width);
       
    var perimeter = (2 * length ) + (2 * width );
    var area= length * width ;
    var volume= length * width * depth;
    
     document.getElementById("a").innerHTML =
            "Area of rectangle:"  + area;
     document.getElementById("p").innerHTML =
            "perimeter of rectangle:"  + perimeter ;
     document.getElementById("v").innerHTML =
            "volume of rectangle prism:"  + volume;
            return area;
    }
    function calcuArea(length,width){
return length*width;
    }