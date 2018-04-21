const routes = require('express').Router();



routes.get('/' , (req,res) => {
    const title = 'Welcome to Express';
    res.render('welcome' , { title } );
});



module.exports = routes;