/**
 * User: ramkumar
 * Date: 6/21/13
 * Time: 11:39 PM
 */

"use strict";

var server = require("./server.js");
var http = require ("http");

exports.testHttpsServer=function(test){
    server.start();
    http.get("http://localhost:8080",function(reponse){});
    test.done();
};