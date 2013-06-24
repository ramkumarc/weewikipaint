/**
 * User: ramkumar
 * Date: 6/21/13
 * Time: 11:39 PM
 */
"use strict";

var http = require ("http");
var server;

exports.start = function(portNumber){
    server = http.createServer();

    server.on("request",function(request,response){
        response.end("Hello World");
    });
    server.listen(portNumber);
};

exports.stop = function(callback){
    server.close(callback);
};