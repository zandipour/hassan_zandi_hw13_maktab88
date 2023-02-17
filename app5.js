const express = require("express");
const path = require("path");
const app = express();

app.get("/page-1" , (req,res)=>{
    res.sendFile(`${__dirname}/html/page-1.html`);
});
app.get("/page-2" , (req,res)=>{
    res.sendFile(`${__dirname}/html/page-2.html`);
});
app.get("/page-3" , (req,res)=>{
    res.sendFile(`${__dirname}/html/page-3.html`);
});
app.get("/page-4" , (req,res)=>{
    res.sendFile(`${__dirname}/html/page-4.html`);
});
app.get("/page-5" , (req,res)=>{
    res.sendFile(`${__dirname}/html/page-5.html`);
});




app.listen(5003);