/**
 * User: ramkumar
 * Date: 6/21/13
 * Time: 11:39 PM
 */
"use strict";

var http = require ("http");

exports.start = function(){
    var http = require ("http");
    var server = http.createServer();

    server.on("request",function(request,response){
        console.log("Received request");

        var body = "<html><head><title>Node HTTP</title></head>"+
            "<body><p>Node's HTTP server</p></body></html>";
        response.end(body);
    });
    server.listen(8080);

    console.log("Server started");

};