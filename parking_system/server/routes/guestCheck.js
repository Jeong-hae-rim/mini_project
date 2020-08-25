var express = require('express');
var router = express.Router();
var GuestCheck = require('../controller/GuestCheck');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('guestCheck', { title: 'Parking? Parking!' });
});


router.post('/', function(req, res, next) {
  let car_number = req.body.car_number;
  let getSuccess = 0;
  const guest = new GuestCheck();

  console.log(car_number);

  guest.guestCheck(car_number).then(result => {
    getSuccess = result;
    var start = JSON.stringify(result[0].c_parkstart).toString().slice(0, 20).replace(/\"|T/g, " ");
    var finish = JSON.stringify(result[0].c_parkfinish).toString().slice(0, 20).replace(/\"|T/g, " ");
    
    var data = {
      start : start, 
      finish : finish
    };
    console.log(start+", "+finish);
    if(result === 0){
      res.send('?');
    } else {
      console.log(data);
      res.send(data);
    }
  });
});

module.exports = router;