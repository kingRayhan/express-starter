/**
 * Includes all required packages
 */
const express = require('express');
const beautify = require('express-beautify');
const pug = require('pug');
const bodyParser = require('body-parser');
const path = require('path');

// start express application
const app = express();

// Beautify rendered markups
app.use(beautify());

/**
 * Enable body parser to get all form request
 */
// Takes the raw requests and turns them into usable properties on req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


/**
 * Setup views
 */
// view directory
app.set('views' , 'views');
// setup view engine
app.set('view engine' , 'pug');


/**
 * Setup public directory for Client-side
 */
app.use(express.static( path.resolve(__dirname , './client') ));


/**
 * Routes
 */
app.use('/'  , require('./routes'));


// done! we export it so we can start the site in start.js
module.exports = app;