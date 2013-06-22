/**
 * User: ramkumar
 * Date: 6/21/13
 * Time: 11:39 PM
 */

"use strict";

var server = require("./server.js");

exports.testNothing = function(test) {
    test.equals(3,server.number(),"number");
    test.done();
};