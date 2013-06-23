/**
 * User: ramkumar
 * Date: 6/21/13
 * Time: 11:39 PM
 */
"use strict";

var http = require ("http");
var server;

exports.start = function(){
    server = http.createServer();

    server.on("request",function(request,response){
        response.end();
    });
    server.listen(8080);
};

exports.stop = function(callback){
    server.close(callback);
};