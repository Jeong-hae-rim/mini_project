var express = require('express');
var router = express.Router();
var TimeController  = require('../controller/TimeController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('timeCheck');
});

router.get('/', function(req, res, next) {
  res.render('pay');
});

router.post('/', function(req, res, next) {
  
  let { car_number }= req.body;
  let getSuccess = 0;
  let time = new TimeController();
  
  console.log(car_number);
  
  time.timeCheck(car_number).then(result => {
    getSuccess = result;
    if(getSuccess === 0) {
      res.send('여기다 값을 어떻게 뿌려주지?');
    }
    else{
      
      if(result != null){
        res.send(result);
        // res.send('총 주차 시간 : '+value);
      } else {
        res.send('출차해주세요.');
      }
    }


  });
});

module.exports = router;
