/**
 * GET /
 */

var Test = require('../models/Test');

console.log('home.js');

exports.index = function (req, res) {
    res.render('home',{title:"Home"});

};

exports.get_data = function(req, res){
    Test.find(function(err,result){

        if (err) throw err;

        console.log("Result:");
        console.log(result);
        res.render('home',{title:"Home", items:result});
    });
};

/**
 * POST /
 */
exports.post_data = function(req,res){

    console.log("post_data");
    var item = {
        name: req.body.name,
        date: req.body.date,
        author: req.body.author
    };

    var data = new Test(item);
    data.save();

    res.redirect('/');

    //TODO message de confirmation comme quoi la donnée a été insérée
};


/**
 * UPDATE /
 */
exports.update_data = function(req,res){
    Test.findOne({name: req.body.name}, function(err, doc) {
        if (err) {
            console.error('error, no entry found');
        }
        doc.content = req.body.content;
        doc.author = req.body.author;
        doc.save();
    })
    res.redirect('/');
    //TODO message de confirmation d'update
};

exports.delete_data = function(req,res){

    Test.findOneAndRemove({author: req.body.author}, function(err,doc) {
        if (err) throw err;
        if(doc){
            console.log('Doc found and removed');
        }else{
            console.log('No user found');
        }
    });


    res.redirect('/');
    //TODO message de confirmation de delete
};