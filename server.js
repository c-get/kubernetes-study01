var http = require('http');

var handleRequest = function(request, response) {
        var os = require('os');
        var hostname = os.hostname();
        response.writeHead(200);
        response.end("<h1>Hello World! Version 2 == " + hostname + "</h1>");
}

var www = http.createServer(handleRequest);
www.listen(8080);
