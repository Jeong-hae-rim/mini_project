var express = require('express');
var router = express.Router();
var Member = require('../controller/Member');
const { render } = require('pug');

router.post('/info', function(req, res, next) {
    let name = req.body.memName;
    let apt = req.body.memApt;
    let getSuccess = 0;
    const mem = new Member();
  
    console.log(name, apt);
  
    mem.memberCheck(name, apt).then(result => {
        getSuccess = result;
        console.log("결과1 "+ result);
  
        if(result === 0){
          res.render('memfalse', {title : 'parking? parking!'});
        } else {
          console.log("결과2 "+JSON.stringify(result));
          req.session.memName = JSON.stringify(result[0].u_name).replace(/\"|T/g, "");
          var phonenum = JSON.stringify(result[0].u_phonenum).replace(/\"|T/g, "");
          var aptnum = JSON.stringify(result[0].u_aptnum).replace(/\"|T/g, "");
          var adddate = JSON.stringify(result[0].u_adddate).replace(/\"|T/g, "");
          var car = [];
          for(var i = 0; i<result.length; i++){
            car.push(JSON.stringify(result[i].m_carnum).replace(/\"|T/g, ""));
          }
          req.session.save(function(){
            res.render(
                'memberPage',
                { title : 'parking? parking!', 
                  name : req.session.memName,
                  phonenum : phonenum,
                  aptnum : aptnum,
                  adddate : adddate,
                  car : car
                }
            );
          });
        }
    })
});

router.get('/info', function(req, res, next){
  if(!req.session.memName){
    res.render('guestPage', {title: 'parking? parking!'})
  }
})

module.exports = router;