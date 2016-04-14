var mongoose = require('mongoose');

var trainer = new mongoose.Schema({
	name: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
	username: { type: String, required: true },

});

module.exports = mongoose.model('Trainer', trainer);





// userSchema.pre('save', function(next) {
//  var user = this;
//  user.updatedAt = new Date();
//  next();
// });







