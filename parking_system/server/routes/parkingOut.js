var express = require('express');
var router = express.Router();
var ParkingOut = require('../controller/ParkingOut');
var bodyParser = require('body-parser');


router.get('/', function(req, res, next) {

  res.render('parkingOut');
});


router.post('/', function(req, res, next) {
  let { car_number } = req.body;
  let getSuccess = 0;
  const parkingOut = new ParkingOut();

  parkingOut.checkOutCar(car_number).then(result => { 
    getSuccess = result;
    console.log(result);
    if(getSuccess === 0) {
        var status = {
             "status": 200,
             "message": '정산이 시작됩니다.'
        }        
       res.end(JSON.stringify(status));
    }
    else{
        res.send('차량 번호를 입력해주세요.');
    }
  });
});

module.exports = router;
