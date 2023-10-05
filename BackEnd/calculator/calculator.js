const express = require('express')
const bodyParser = require("body-parser")

const app = express();
app.use(bodyParser.urlencoded({extended:true}))

app.get("/bmiCalculator",(req,res)=>{
    res.sendFile(__dirname + "/bmiCalculator.html")
})

app.post("/bmiCalculator",(req,res)=>{
    var num1 = Number(req.body.height);
    var num2 = Number(req.body.weight);
    var BMI = (num2)/(num1**2);
    res.send("your BMI is" + BMI);
})
bc

// app.get("/",(req,res)=>{
//     res.sendFile(__dirname + "/index.html");
// })

// app.post("/", (req, res)=>{
//     var num1 = Number(req.body.num1);
//     var num2 = Number(req.body.num2);
//     var result = num1 + num2;
//     res.send("result is" +result)
// })

app.listen(3000,()=>{
    console.log("file saved")
})