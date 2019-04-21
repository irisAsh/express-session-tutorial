var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.session)
  console.log(req.session.visitCount)
  var session = req.session;
  if (!!session.visitCount) {
    session.visitCount += 1;
  } else {
    session.visitCount = 1;
  }
  res.render('index', { visitCount: session.visitCount });
});

module.exports = router;
