var express = require('express');
var router = express.Router();
var Tickets = require('../controller/Tickets');


router.get('/', function(req, res, next) {
    console.log("ticketadd connect");
    res.render('ticketadd');
});
  

router.post('/', function(req, res, next) {
    
    let carnum = req.body.carnum;
    let method = req.body.method;
    let addprice = req.body.addprice;
    let getSuccess = 0;
    const tickets = new Tickets();
    
    console.log(carnum+", "+method+", "+addprice);

    tickets.TicketsAdd(carnum, method, addprice).then(result => {
        getSuccess = result;
        if(getSuccess === 0) {
        res.send('?');
        }
        else{
        res.send('???');
        }
    });
}); 

module.exports = router;