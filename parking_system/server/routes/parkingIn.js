var express = require('express');
var router = express.Router();
var ParkingIn = require('../controller/ParkingIn');



router.get('/', function(req, res, next) {

  res.render('parkingIn', { title: 'Parking? Parking!' });
});


router.post('/', function(req, res, next) {
  let { car_number }= req.body;
  let putSuccess = 0;
  const parking = new ParkingIn();

  parking.checkInCar(car_number).then(result => {
    putSuccess = result;
    console.log(result);

    if(putSuccess === 2) {
      console.log('failed : '+result);
      res.send("failed");
    }
    else{
      console.log('success : '+JSON.stringify(result));
      var status = {
        "status": 200,
        "message": '입차가 시작됩니다.'
      }        
      res.end(JSON.stringify(status));
    }

  });
});

module.exports = router;
