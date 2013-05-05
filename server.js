// Shelley Powers. Learning Node (Kindle Locations 602-608). O'Reilly Media. 
// load http module 
var http = require('http'); 
var fs = require('fs'); 

// create http server 
http.createServer( function (req, res) {
	// open and read in server.js 
	fs.readFile('server.js', 'utf8', function( err, data) {
		res.writeHead( 200, {'Content-Type': 'text/ plain'});
		if (err)
			res.write('Could not find or open file for reading\n');
		else // if no error, write JS file to client 
			res.write( data);
		res.end();
	 });
}).listen( 8124, function() {
	 console.log('bound to port 8124');
});
console.log('Server running on 8124');

