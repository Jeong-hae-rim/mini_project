var express = require('express');
var router = express.Router();
var ParkInfo = require('../controller/ParkInfo');

/* GET home page. */
router.get('/', function(req, res, next) {
    let { parkinfo }= req.body;
    let getSuccess = 0;
    const park = new ParkInfo();

    park.parkinfo(parkinfo).then(result => { 
        getSuccess = result;
        result = JSON.stringify(result[0].count);
        total = 500;
        result = 500 - result;
        console.log(result);
        res.render('parkinfo', { title: 'Parking? Parking!', total: total, result: result });
    });

});

module.exports = router;