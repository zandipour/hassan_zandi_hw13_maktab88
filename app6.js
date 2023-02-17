const express = require('express');
const app = express();

app.get('/:root', function(req, res) {
   res.sendFile(`${__dirname}/html/page-${req.params.root}.html`);
});


app.listen(3000);