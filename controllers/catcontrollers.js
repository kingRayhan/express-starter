// --
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Cat = mongoose.model('Cat');


exports.createCatForm = (req,res) => {
    const title = 'Register new Cat';
    res.render('create' , { title } );
}

exports.createCat = (req,res) => {
    new Cat(req.body).save().catch(  e => console.log(e) )
    res.redirect('/create');
}