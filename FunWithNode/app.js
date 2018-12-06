'use strict';

console.log('Hello world');
var x = 10;
var y = 25;

console.log(x * y);

var msgs = require("./msgs.js");
//console.log(msgs.first);
console.log(msgs());

var logger = require("./logger"); //it is looking for index.js as the starting point for our logger
logger.log("This is from the logger");

var underscore = require("underscore"); // no need to specify folder because it is looking under node_modules, and node_modules are like NUGET pacakges in .NET
