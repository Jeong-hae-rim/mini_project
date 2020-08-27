var express = require('express');
var router = express.Router();
var Admin = require('../controller/Admin');

router.get('/', function(req, res, next) {
  let getSuccess = 0;
  const ad = new Admin();

  ad.SelectUser().then(result => {
    getSuccess = result;
    console.log(result);

    res.render('adminPage', {title: 'parking? parking!', users: result[0], cars: result[1], contacts: result[2], payments: result[3], tickets: result[4], have: result[5], charge: result[6]});
  });
});

router.post('/', function(req, res, next) {
  let cost = req.body.upcost;
  let getSuccess = 0;
  const ad = new Admin();

  console.log(cost);

  ad.UpdateCost(cost).then(result => {
      getSuccess = result;
      console.log(result);

      if(result === 0){
          res.send('no');
      } else {
          console.log(result);
          res.send('yes');
      }
  })
});

module.exports = router;
