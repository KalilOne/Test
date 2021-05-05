//REST API in Node.js
'use strict';
const express        = require('express');
const bodyParser     = require('body-parser');
const app            = express();
const jsonData = require('./location.json');

module.exports = function(app, db) {
};
module.exports = function(app, db) {  app.post('/server', (req, res) => { res.send(jsonData)  });};

// Create a server to listen at port 8080
const port = 8080;
app.use(bodyParser.urlencoded({ extended: true }));
require('./server')(app, {});app.listen(port, () => {  console.log('We are live on ' + port);});