var express = require('express');
var router = express.Router();
var ParkingOut = require('../controller/ParkingOut');


router.get('/', function(req, res, next) {
  res.render('parkingOut', { title: 'Parking? Parking!' });
});


router.post('/', function(req, res, next) {
  let { car_number } = req.body;
  let getSuccess = 0;
  const parkingOut = new ParkingOut();

  parkingOut.checkOutCar(car_number).then(result => { 
    getSuccess = result;
    if(getSuccess) {
      console.log(result);
      res.send("not null "+result);
    } else{
      console.log(result);
      res.send("success");
    }
  });
});

module.exports = router;
