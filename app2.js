const express = require("express");
const app = express();

app.get("/home", (req, res) => {
    res.send("Home Route")
    req.get('Something');
})

app.get("/about", (req, res) => {
    res.send("About Route");

})

app.get("/contact", (req, res) => {
    res.send("Contact Route");

})

app.get("/", (req, res) => {
    res.send("Root Route");

})

app.use("*", (req, res) => {
    res.status(404).send("<h1> 404 not found</h1>");
});



app.listen(5000);