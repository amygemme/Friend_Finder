var path = require("path");
var express = require("express");

var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./app/routing/htmlRoutes")(app, path);
require("./app/routing/apiRoutes")(app,path);

app.listen(PORT, function(req,res){
    console.log("App listening on PORT: " + PORT);
});


