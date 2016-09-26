const server = require('http').createServer(require('./app'));
var db = require('./db');
const port = process.env.PORT || 3000;

if(process.env.SYNC) {
	db.syncAndSeed()
	.then(function() {
		console.log("synced and seeded");
	})
	.catch(function(err) {
		console.log(err);
	});
};

server.listen(port, function() {
	console.log("server listening on port " + port);
});
