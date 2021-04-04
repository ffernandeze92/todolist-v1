const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine','ejs');


app.get("/",function(req,res){
  var today = new Date();
  var currentDay = today.getDay();
  var day = "";

  if(currentDay === 6 || currentDay === 0){
    day ="Weekend";
    //res.sendFile(__dirname + "/index.html
    //res.write("<h1>it's weekend!</h1>");
  //  res.write("<h1>it's weekend!</h1>");
//    res.send();
  }else{
    day ="Weekday";
//    res.write("<h1>I have to work!!!</h1>");
//    res.write("<p>I have to work</p>");
  //res.sendFile(__dirname + "/weekday.html")
  //  res.send();
  }
  res.render("list",{kindOfDay:day});

});

app.listen(3000,function(){
  console.log("Server started on port 3000");
});
