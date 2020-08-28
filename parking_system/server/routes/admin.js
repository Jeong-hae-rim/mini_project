var express = require('express');
var router = express.Router();
var Admin = require('../controller/Admin');

router.post('/login', function(req, res, next) {
  let id = req.body.adminId;
  let pw = req.body.adminPw;
  let getSuccess = 0;
  const ad = new Admin();

  console.log(id, pw);

  ad.CheckAdmin(id, pw).then(result => {
      getSuccess = result;
      console.log("결과1 "+ result);

      if(result === 0){
        res.render('loginfalse', {title : 'parking? parking!'});
      } else {
        console.log("결과2 "+JSON.stringify(result[0].a_id));
        req.session.adminId = JSON.stringify(result[0].a_id);
        res.redirect('/admin/secret');
      }
  })
});

router.get('/logout', function(req, res, next){
  delete req.session.adminId;
  req.session.save(function(){
    res.redirect('/');
  });
});

router.get('/test', function(req, res, next){
  res.send(req.session);
})

router.get('/secret', function(req, res, next) {
  let getSuccess = 0;
  const ad = new Admin();
  if(req.session.adminId){
    ad.SelectUser().then(result => {
      getSuccess = result;
      console.log(result);
      
      res.render(
        'adminPage', 
        { title: 'parking? parking!', 
          admin: (req.session.adminId).replace(/\"|T/g, ""), 
          users: result[0], 
          cars: result[1], 
          contacts: result[2],                     
          payments: result[3], 
          tickets: result[4], 
          have: result[5],                     
          charge: result[6]
        }
      );
    });
  }else{
    res.render('guestPage', {title: 'parking? parking!'});
  }
});

router.post('/secret', function(req, res, next) {
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
