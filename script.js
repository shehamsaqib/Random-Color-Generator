  // Random Colour Generator //
  

var displayBody = document.body;
var rgbColor = document.querySelector("#current-color");

var btn = document.querySelector("button");

function RandomColorGen(){

  var red = Math.floor(Math.random()*256);
   var green = Math.floor(Math.random()*256);  
    var blue = Math.floor(Math.random()*256);
    
    var completeColor = "rgb" + "(" + red + "," + green + "," + blue + ")";
    return completeColor;
}

btn.addEventListener("click", function(){

  var randomColorFunc = RandomColorGen();

  displayBody.style.backgroundColor = randomColorFunc;
  rgbColor.innerText = randomColorFunc;

})