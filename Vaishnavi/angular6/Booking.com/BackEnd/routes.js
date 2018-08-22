
var express = require('express');

var router = express.Router();


var bookedTickets= require('./controller/bookedTickets');


router.get('/Tickets/:date',bookedTickets.getAll);
router.get('/Ticket/:id',bookedTickets.checkTime);
router.post('/process/',bookedTickets.create);
router.put('/Ticket/:id',bookedTickets.update);



module.exports = router;

