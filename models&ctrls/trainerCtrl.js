var Trainer = require('./trainer');






//find one query:
var handleGetOne = function(req, res) {
	Trainer.findById(req.params.id, function(error, response) {
		if(error) {
			res.status(500).json(error)
		} else {
			res.json(response)
		}
	})
}
/////
//post query:
var handlePost = function(req, res) {
	Trainer.create(req.body, function(error, response) {
		if(error) {
			res.status(500).json(error)
		} else {
			res.json(response)
		}
	})
}
/////
//update query:
var handlePut = function(req, res) {
	Trainer.findByIdAndUpdate(req.params.id, req.body, function(error, response) {
		if(error) {
			res.status(500).json(error)
		} else {
			res.json(response)
		}
	})
}
/////
module.exports = {
	getOne: handleGetOne,
	post: handlePost,
	put: handlePut
};
