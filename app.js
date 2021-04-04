const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.get("/",function(req,res){
  var today = new Date();
  var currentDay = today.getDay();

  if(currentDay === 6 || currentDay === 0){
    res.sendFile(__dirname + "/index.html")
    //res.write("<h1>it's weekend!</h1>");
  //  res.write("<h1>it's weekend!</h1>");
//    res.send();

  }else{
    res.write("<h1>I have to work!!!</h1>");
    res.write("<p>I have to work</p>");

    res.send();
  }
});

app.listen(3000,function(){
  console.log("Server started on port 3000");
});
