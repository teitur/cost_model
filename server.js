//server.js
const express = require('express'),
      server = express();

server.engine('html', require('ejs').renderFile);

server.set('port', process.env.PORT || 8080);

//Basic routes
/*
server.get('/', (request,response)=>{
   response.send('Home page');
});
*/

server.get('/', function (req, res) {
  // try to initialize the db on every request if it's not already
  // initialized.

  var count = 10
  var dbDetails = {type: 'type', url: 'hej://'}
  res.render('index.html', { pageCountMessage : count, dbInfo: dbDetails });
});



server.get('/about',(request,response)=>{
   response.send('About page');
});

//Express error handling middleware
server.use((request,response)=>{
   response.type('text/plain');
   response.status(505);
   response.send('Error page');
});

//Binding to a port
server.listen(8080, ()=>{
  console.log('Express server started at port 8080');
});
