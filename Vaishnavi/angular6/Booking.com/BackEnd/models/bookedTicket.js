var mongoose = require('mongoose');
var timestamp = require('mongoose-timestamp');
var Schema = mongoose.Schema;

var bookedTicket = new Schema({
	
	name:String,
	email:String,
	seatsReserved:Array,
	phone:String,
	eventDate:Date,
	status:String,
	costOfTicket:Number
});
bookedTicket.plugin(timestamp);																					
module.exports = mongoose.model('bookedTicket',bookedTicket);
