var http = require("http");  //http built-in library - Listen to the server and respond 
var express = require("express");  // require express to start up our server
var app = express();                // the express dependency reference can be executed like a function, and it'll return to us an object that represent our individual app, a singleton

//Setup the view engine. We don't need a require here because we're giving it the name of it.
app.set("view engine", "jade");

app.get("/", function (req, res) {
    //res.send("<html><body><h1>Express</h1></body></html>");  //the response now has helpers. send is a helper function to avoid write and end, get you there a little bit quicker.
    res.render("jade/index", { title: "Express + Jade" });
});

app.get("/api/users", function (req, res) {
    res.set("Content-Type", "application/json");
    res.send({ name: "Shawn", isValid: true, group: "Admin" });
});

var server = http.createServer(app);

server.listen(3000);

