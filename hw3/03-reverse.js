document.querySelector('#reverse').onclick = function () {
  // Add your code here
  var inputNum = document.getElementById("input").value;

  if(inputNum.length != 8) {
    document.getElementById("results").innerHTML = "Error: Please input an 8-digit number";
    document.getElementById("results").style.color = "red";
  }
  else {
    document.getElementById("results").innerHTML = inputNum + " ==> " + inputNum.split('').reverse().join(''); 
    document.getElementById("results").style.color = "green";
  }
};
