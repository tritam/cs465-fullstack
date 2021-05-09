const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

// Add your code here
app.use(express.static(__dirname + '/public'));
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

app.post('/submit', (req, res) => {
  // Add your code here
  var formName = req.body.name;
  var formEmail = req.body.email;
  var formComments = req.body.q1;
  if(formComments === '') {
    formComments = 'N/A';
  }
  var formNewsletter = req.body.q2;
  if(formNewsletter === 'on') {
    formNewsletter = 'Yes, sign me up';
  }
  else {
    formNewsletter = 'No, thank you';
  }

  res.send('Name: '+formName+`<br>`+
    'Email: '+formEmail+`<br>`+
    'Comments: '+formComments+`<br>`+
    'Newsletter: '+formNewsletter
  );
  res.end();
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
