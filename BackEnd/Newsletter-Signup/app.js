const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");

const app = express();
app.use(bodyParser.urlencoded({extended:true})); 
app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/signup.html");
})

app.post("/", (req,res)=>{
    const fitstName = req.body.fName;
    const secondname = req.body.lName;
    const email = req.body.Email;

    const data = {
        members : {
            email_address: email,
            status:"subscribed",
            merge_fields:{
                FNAME : fitstName,
                LNAME : lastName,
            }
        }
    }
    const jsonData = JSON.stringify(data);

    const url = "hhtps://us8.api.mailchimp.com/3.0/lists/4bcf3cbb34";

    const options = {
        method:"POsST",
        auth:"rajath:84df3fbdb5ecd5c167dd1dde4d960161-us8"
    }

    const request = https.require(url, options, (response)=>{
        response.on("data",()=>{
            console.log(JSON.parse(data))
        })
    })
    request.write(jsonData);
    request.end();
})



app.get("/Success", (req,res)=>{
    res.sendFile(__dirname + "/success.html");
})

app.get("/failure",(req,res)=>{
    res.sendFile(__dirname+"/failure.html");
})



app.listen(3000,()=>{
    console.log("server is ruunning on port 3000")
})




//84df3fbdb5ecd5c167dd1dde4d960161-us8

// 1cd080b259