var express = require('express');
var router = express.Router();
var ParkingIn = require('../controller/ParkingIn');



router.get('/', function(req, res, next) {

  res.render('parkingIn');
});


router.post('/', function(req, res, next) {
  let { car_number }= req.body;
  let putSuccess = 0;
  const parking = new ParkingIn();

  parking.checkInCar(car_number).then(result => {
    putSuccess = result;
    
    if(putSuccess === 0) {
      res.send("failed");
    }

    res.send('입차되었습니다.');

  });
});

module.exports = router;
