var express = require('express');
var router = express.Router();
var Tickets = require('../controller/Tickets');


router.get('/', function(req, res, next) {
    console.log("?");
    res.render('tickets');
});


router.post('/', function(req, res, next) {
    
    let carnum = req.body.car_number;
    let method = req.body.method;
    let userprice = req.body.userPrice;
    let getSuccess = 0;
    const tickets = new Tickets();
    
    console.log(carnum+", "+method+", "+userprice);

    tickets.Tickets(carnum, method, userprice).then(result => {
        getSuccess = result;
        console.log(result);
        if(getSuccess === 0) {
        res.send('0');
        }
        else{
        res.send('???');
        }
    });
});

module.exports = router;