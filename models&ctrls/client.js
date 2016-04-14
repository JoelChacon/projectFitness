var mongoose = require('mongoose');

var client = new mongoose.Schema({
	name: String,
	// photo: String,
	address: String,
	body: {
		height: String,
		weight: String,
		BMI: String,
		bodyFatPercentage: String
	},
	email: String,
	phone: String,
	notes: { type: String, required: false }
})

module.exports = mongoose.model('Client', client )