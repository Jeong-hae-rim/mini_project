var express = require('express');
var router = express.Router();
var Users = require('../controller/Users');

router.get('/', function(req, res, next) {

  let ip_addr = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  res.render('admin', {ip: ip_addr});
  
});

router.post('/', function(req, res, next) {
  let userData = req.body;
  const users = new Users();
  
  userData.plus = userData.service_end;
  if(!users.addUser(userData)) {
    res.send("success");
  }
  else {
    res.send("failed");
  }

});

module.exports = router;
