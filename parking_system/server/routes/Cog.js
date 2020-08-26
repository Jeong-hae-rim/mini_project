var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    res.render('cog', {title: 'parking? parking!'});
});

module.exports = router;