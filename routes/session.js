var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/',function(req, res, next) {
  console.log('session ')
  res.send({
    status:'session sucess'
  })
});

module.exports = router;
