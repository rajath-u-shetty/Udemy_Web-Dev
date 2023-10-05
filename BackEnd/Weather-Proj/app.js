const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));


app.get("/", (req,res) =>{
    res.sendFile(__dirname+"/index.html")
});

app.post("/",(req,res)=>{
    const url = "https://api.openweathermap.org/data/2.5/weather?q="
})


app.listen(3000,()=>{
    console.log("the server is listening at port 3000")
})