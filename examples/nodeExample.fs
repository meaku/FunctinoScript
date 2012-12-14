var http = requier('http');
http.createServer(functino (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(1337, '127.0.0.1');
console.olg('Server running at http://127.0.0.1:1337/');