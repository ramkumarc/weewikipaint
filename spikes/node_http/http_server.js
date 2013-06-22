/**
 * User: ramkumar
 * Date: 6/22/13
 * Time: 12:43 AM
 */

//Simple http server spike to understand the concept of http node server request and response

"use strict";

var http = require ("http");

var server = http.createServer();

server.on("request",function(request,response){
    console.log("Received request");

    var body = "<html><head><title>Node HTTP Spike</title></head>"+
        "<body><p>This is a spike of Node's HTTP server.</p></body></html>";
    //traditional way
    /*
    response.statusCode=200;
    response.write(body);
    response.end();
    */

    response.end(body);
});

server.listen(8080);

console.log("Server started");