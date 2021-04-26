function handleSubmit(event) {
  // Add your code here
  console.log("Name: " + document.getElementById("name").value);
  console.log("Email: " + document.getElementById("email").value);

  var commentsInput = document.getElementById("q1").value == "" ? 
      "Feedback: No feedback was submitted" : "Feedback: "+document.getElementById("q1").value;
  console.log(commentsInput);

  var isChecked = document.getElementById("q2").checked ? "Newsletter: Yes, I'd like to sign up" : "Newsletter: No thanks";
  console.log(isChecked);

  event.preventDefault();
}

const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit);