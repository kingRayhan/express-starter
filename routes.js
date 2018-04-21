const routes = require('express').Router();
const { createCat , createCatForm } = require('./controllers/catcontrollers');

routes.get('/' , (req,res) => {
    const title = 'Welcome to Express';
    res.render('welcome' , { title } );
});

routes.get('/create' , createCatForm);

routes.post('/upload' , createCat);


module.exports = routes;