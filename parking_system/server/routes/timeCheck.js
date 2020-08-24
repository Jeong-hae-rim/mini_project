var express = require('express');
var router = express.Router();
var TimeController  = require('../controller/TimeController');

/* GET timechek page. */
router.get('/', function(req, res, next) {
  res.render('timeCheck');
});

router.post('/', function(req, res, next) {
  
  let { car_number }= req.body;
  let getSuccess = 0;
  let time = new TimeController();
  
  console.log(car_number);
  
  time.timeCheck(car_number).then(result => {
    getSuccess = result;
    if(getSuccess === 0) {
      res.send('집계 실패. 다시 시도해주세요.');
    }
    else{
      if(result === 0){
        res.send(['입차 및 출차를 하지 않은 차량입니다.']);
      } else {
        res.send(result);
      }
    }
  });
});

module.exports = router;
