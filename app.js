const express = require("express");
const app = express();





app.get("/root", (req, res) => {

    res.send("Hello World!!!")
});





app.listen(8080);

