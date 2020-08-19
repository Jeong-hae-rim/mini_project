var express = require('express');
var router = express.Router();
var Parking = require('../controller/Parking');
var Customer = require('../controller/Customer');



router.get('/', function(req, res, next) {

  res.render('parking');
});


router.post('/', function(req, res, next) {
  let { car_number }= req.body;
  let putSuccess = 0;
  let isRegistered = 0;
  const parking = new Parking();
  const customer = new Customer();

  customer.checkUser(car_number).then(result => {
    isRegistered = result;

    parking.checkInCar(car_number, isRegistered).then(result => {
      putSuccess = result;
  
      if(putSuccess === 0) {
        res.send("failed");
      }

      res.send(isRegistered ? "user hello" : "guest hello");

    });
  });
});

module.exports = router;
