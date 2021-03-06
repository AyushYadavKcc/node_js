var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("hello")
});
router.get('/:da', function(req, res, next) {
  console.log(req.params)
  res.json({name:req.params.da})
});
router.get('/:da-:ta', function(req, res, next) {
  console.log(req.params)
  res.json({name:req.params.da+","+req.params.ta+"="+req.params.da+req.params.ta})
});

module.exports = router;
