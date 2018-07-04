var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
  console.log(`Name: ${req.body.name}`);
  console.log(`Email: ${req.body.email}`);
  let date = new Date(req.body.datePicker);
  console.log(`Date: ${date.toDateString()}`);
  console.log(`Persons: ${Number.parseInt(req.body.people)}`);
  console.log(`Comments: ${req.body.coments}`);
  console.log(`Trip name: ${req.body.tripName}`);
  console.log(`Trip ID: ${req.body.tripId}`);
  console.log(`Trip price: ${Number.parseFloat(req.body.tripPrice)}`);
  console.log(`Final price: ${Number.parseFloat(req.body.finalPrice)}`);
  res.sendStatus(200);
});

module.exports = router;
