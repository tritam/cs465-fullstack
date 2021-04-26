// Add your code here
document.querySelector('#input').onkeyup = function () {
    var inputEmail = document.getElementById("input").value;
  
    var re = /\S+@\S+\.\S+/;
    var checkEmail = re.test(inputEmail);

    if(checkEmail == false) {
      document.getElementById("results").innerHTML = "Error: Please input an 8-digit number";
      document.getElementById("results").style.color = "red";
    }
    else {
      document.getElementById("results").innerHTML = "Thank you! This is a valid email address"; 
      document.getElementById("results").style.color = "green";
    }
};