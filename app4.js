const express = require("express");
const path = require("path");
const app = express();


app.get("/home" , (req,res)=>{
    res.sendFile(`${__dirname}/html/index.html`);
});

app.get("/picture" ,(req , res)=>{
    res.sendFile(path.join(__dirname , "/img/1.jpg"))
});



app.listen(5005);