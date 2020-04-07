var express = require('express');

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  let dataaarray=[
{name :'aliiiiiiiiiiiiii', profession :'software',age:'23', education :'engineer',},
{name :'mobeeniiiiiiiii', profession :'software',age:'25', education :'engineer',},
{name :'razaiiiiiiiiiii', profession :'software',age:'23', education :'engineer',},
  ];
  res.json({
    data : dataaarray
});

});
module.exports = router;
