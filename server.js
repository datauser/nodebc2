// 1. nodejs.org
//    http://howtonode.org/ 
// 2. http://net.tutsplus.com/tutorials/javascript-ajax/learning-serverside-javascript-with-Node-js/
//    http://net.tutsplus.com/tutorials/javascript-ajax/creating-a-to-do-list-app-with-node-js-and-geddy/

var http = require('http');

//Get the environment variables we need.
var ipaddr  = process.env.AZURE_INTERNAL_IP || "127.0.0.1";
var port    = process.env.PORT || 8080;

// The anonymous function that is passed into http.createServer will be 
// called whenever a request comes in to the server.
http.createServer(function (req, res) {
  // http://nodejs.org/api/http.html
  // http connection status code
  res.writeHead(200, {'Content-Type': 'text/plain'});
  // send response and close connection
  res.write("Hello World\n");
  res.end('oh well" + ipaddr, + '\n');
}).listen(port, ipaddr);
console.log('nodebc2 at azurewebsites' );

