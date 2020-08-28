var express = require('express');
var router = express.Router();
var Contact = require('../controller/CogContact');

router.get('/', function(req, res){
    res.render('cog', {title: 'parking? parking!'});
});

router.get('/admin', function(req, res, next) {

    res.render('login', {title: 'parking? parking!'});
    
});

router.get('/member', function(req, res, next){
    
    res.render('memberlogin', {title: 'parking? parking!'});
})

router.get('/appinfo', function(req, res){
    res.render('appInfo', {title: 'parking? parking!'});
});

router.get('/contact', function(req, res){
    res.render('contact', {title: 'parking? parking!'});
});

router.post('/contact', function(req, res, next) {
    let name = req.body.name;
    let car_number = req.body.car_number;
    let contact = req.body.contact;
    let getSuccess = 0;
    const con = new Contact();

    console.log(name, car_number, contact);

    con.addcontact(name, car_number, contact).then(result => {
        getSuccess = result;
        console.log(result);

        if(result === 0){
            res.send('?');
        } else {
            console.log(result);
            res.send('??');
        }
    })
})


module.exports = router;