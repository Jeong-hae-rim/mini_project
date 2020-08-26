var express = require('express');
var router = express.Router();
var Admin = require('../controller/Admin');

router.get('/', function(req, res, next) {

  res.render('login', {title: 'parking? parking!'});
  
});

router.post('/', function(req, res, next) {
  let id = req.body.id;
  let pw = req.body.pw;
  let getSuccess = 0;
  const ad = new Admin();

  console.log(id, pw);

  ad.CheckAdmin(id, pw).then(result => {
      getSuccess = result;
      console.log(result);

      if(result === 0){
          res.send('no');
      } else {
          console.log(result);
          res.send('yes');
      }
  })
})


module.exports = router;
