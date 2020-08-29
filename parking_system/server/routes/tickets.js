var express = require('express');
var router = express.Router();
var Tickets = require('../controller/Tickets');


router.get('/', function(req, res, next) {
    console.log("?");
    res.render('tickets', { title: 'Parking? Parking!' });
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
        console.log("서버 응답 "+JSON.stringify(result));
        if(result === 2){
            console.log('있는 차량');
            res.send('있음');
        } else if (result === 3) {
            console.log('없는 차량');
            res.send('없음');
        } else {
            console.log('돈이 0원');
            res.send('0원');
        }
    });
});

router.post('/add', function(req, res, next) {
    
    let carnum = req.body.carnum;
    let method = req.body.method;
    let addprice = req.body.addprice;
    let getSuccess = 0;
    const tickets = new Tickets();
    
    console.log(carnum+", "+method+", "+addprice);

    tickets.TicketsAdd(carnum, method, addprice).then(result => {
        getSuccess = result;
        console.log(result);
        if(result === 2){
            console.log('있는 차량');
            res.send('있음');
        } else if (result === 3) {
            console.log('없는 차량');
            res.send('없음');
        } else {
            console.log('돈이 0원');
            res.send('0원');
        }
    });
}); 

module.exports = router;