
function displayInConsole() {

  var textVal = document.getElementById("textVal").value;
  var numVal = document.getElementById("shId").value;
  console.log("The text value entered is: "+textVal+"The number entered is: "+numVal);


  if(numVal == 1){
    var myURL = "./circle.html";
  }
  else if(numVal == 2){
    var myURL = "./square.html";
  }
  else if(numVal == 3){
    var myURL = "./triangle.html";
  }

   document.getElementById("display").innerHTML = "The text value entered is : "+textVal+"<br> The number entered is : "+numVal;

   document.getElementById('link').href = myURL;
