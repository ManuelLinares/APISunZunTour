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
  console.log(`Trip price: ${Number.parseInt(req.body.tripPrice)}`);
  console.log(`Final price: ${Number.parseInt(req.body.finalPrice)}`);
  if (process.env.PROD !== 'true') {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  }
  res.sendStatus(200);
});

module.exports = router;
