var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello, Heroku 3');
});

app.listen(process.env.PORT || 8080, function() {
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
