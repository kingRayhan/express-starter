const express = require('express');
const beautify = require('express-beautify');
const pug = require('pug');
// start express application
const app = express();


app.use(beautify());

app.set('views' , 'views');
app.set('view engine' , 'pug');

app.use(express.static('./public'));

app.use('/'  , require('./routes'))



module.exports = app;