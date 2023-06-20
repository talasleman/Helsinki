const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 8080; // make sure this matches the port specified in your fly.toml

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, function() {
  console.log(`Server listening on port ${port}`);
});