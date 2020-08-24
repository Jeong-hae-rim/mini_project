var express = require('express');
var router = express.Router();
var Pay = require('../controller/pay');


router.get('/', function(req, res, next) {
    console.log("?");
    res.render('payfinish');
});
  

router.post('/', function(req, res, next) {
    let carnum = req.body.car_number;
    let method = req.body.method;
    let totalPrice = req.body.totalPrice;
    totalPrice = totalPrice.split('원');
    let userPrice = req.body.userPrice;
    let getSuccess = 0;
    const pay = new Pay();
  
    console.log(carnum+method+totalPrice+userPrice);
  
    pay.payMoney(carnum, method, userPrice).then(result => {
      getSuccess = result;
      if(result === 0){
        res.send('?');
      } else {
        res.send('???');
      }
    });
  });
  
  module.exports = router;