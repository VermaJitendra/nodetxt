var http = require('http');
http.createServer(function handler(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World, This is a test application to learn deploy app on heroku... :)\n');
}).listen(process.env.PORT||3000, process.env.IP);
console.log('Server running at http://127.0.0.1:3000/');
