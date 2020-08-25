var express = require('express');
var router = express.Router();
var Pay = require('../controller/pay');

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
    if(result === 0){
      res.send('?');
    } else {
      res.send(result);
    }
  });
});

module.exports = router;