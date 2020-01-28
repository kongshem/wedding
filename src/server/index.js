const express = require('express');
const os = require('os');

const app = express();

app.use(express.static('dist'));

app.use(function(req, res) {
    res.redirect('/');
});

app.listen(process.env.PORT || 4001, () => console.log(`Listening on port ${process.env.PORT || 4001}!`));
