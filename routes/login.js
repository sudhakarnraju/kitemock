var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/',function(req, res, next) {
  console.log("Simulating Kite Login...");
  console.log("Sending request_token...");
  const redirectUrl = `https://localhost:3000/login?request_token=token123&redirect_params=${req.query.redirect_params}`
  res.redirect(redirectUrl);
});

module.exports = router;
