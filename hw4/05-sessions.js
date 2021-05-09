const express = require('express');
const session = require('express-session');
const app = express();
const port = process.env.PORT || 5000;

// Add your code here

// Use the express-session module
app.use(session({
  'store':new session.MemoryStore(),
  'secret': "Shh, its a secret!",
  'resave':false,
  'saveUninitialized':false,
  'cookie':{
    'maxAge':86400000
  }
}));

app.get('/', (req, res) => {
  // Add your code here
  if(req.session.page_views) {
    req.session.page_views++;
    res.send("Currently on route: "+req.path+`<br><br>`+"Previously visit: "+`<br>`);
  } 
  else {
    req.session.page_views = 1;
    let fullUrl = req.protocol+'://'+req.get('host')+req.originalUrl;
    res.send("Currently on route: "+req.path+`<br><br>`+"Welcome to "+fullUrl);
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
