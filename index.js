const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const request = require("request");
const https = require("https");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static("public"));

app.get("/", function(req, res) {
  res.render("home");
  }) 

app.get("/sort",function(req,res){
  res.render("sorting");
})

app.get("/search",function(req,res){
  res.render("searching");
})

  app.listen(process.env.PORT||3000, function() {
    console.log("The server is running on port 3000");
  })
  

