var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contact');
});
router.post('/',function(req,res,next){
  res.render('contact',{message:'Messagesent'});

  var fullname = req.body.sendername;
  var email = req.body.email;
  var fullname = req.body.sendername;
  var fullname = req.body.sendername;
  var fullname = req.body.sendername;

});
module.exports = router;


