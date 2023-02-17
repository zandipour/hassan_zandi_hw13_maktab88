"use strict";

const express = require("express");
const app = express();
const fs = require("fs");
var obj;

app.get("/get-all-users", (req, res) => {

    fs.readFile('./user-data.json', 'utf-8', function (err, data) {
        if (err) throw err;
        obj = JSON.parse(data);
        console.log(obj);

    });

    res.send(obj);


});

app.get("/admins", (req, res) => {

    fs.readFile('./user-data.json', 'utf-8', function (err, data) {
        if (err) throw err;
        obj = JSON.parse(data);
        

    });
    const admin = obj.filter(item => 
  
        item.role == "admin"
       
     );
        console.log(admin);
    res.send(admin);


});





app.listen(5000);



