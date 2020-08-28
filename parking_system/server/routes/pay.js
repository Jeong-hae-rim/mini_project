var express = require('express');
var router = express.Router();
var Pay = require('../controller/pay');
const { JSON } = require('mysql2/lib/constants/types');
const { json } = require('body-parser');

router.get('/', function(req, res, next) {
  console.log("?");
  res.render('pay', { title: 'Parking? Parking!' });
});

router.post('/', function(req, res, next) {
  let car_number = req.body.car_number;
  let getSuccess = 0;
  const pay = new Pay();

  console.log(car_number);

  pay.checkOutCar(car_number).then(result => {
    getSuccess = result;
    console.log(result.price);
    console.log(result.member);
    if(result === 0){
      res.send('?');
    } else {
      if(!result.member){
        res.send(result.price);
      } else {
        res.send('member');
      }
    }
  });
});

router.post('/finish', function(req, res, next) {
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