var Client = require('./client');





//find many query:
var handleGetAll = function(req, res) {
	Client.find(req.query, function(error, response) {
		if(error) {
			res.status(500).json(error)
		} else {
			res.json(response)
		}
	})
};
/////
//find one query:
var handleGetOne = function(req, res) {
	Client.findById(req.params.id, function(error, response) {
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
	new Client(req.body).save(function(error, response) {
		console.log("response", response);
		if(error) {
			res.status(500).json(error)
		} else {
			res.send(response)
		}
	})
}
/////
//update query:
var handlePut = function(req, res) {
	Client.findByIdAndUpdate(req.params.id, req.body, function(error, response) {
		if(error) {
			res.status(500).json(error)
		} else {
			res.json(response)
		}
	})
}
/////
//remove update query:
var handleDelete = function(req, res) {
	Client.findByIdAndRemove(req.params.id, function(error, response) {
		if(error) {
			res.status(500).json(error)
		} else {
			res.json(response)
		}
	})
}
/////

module.exports = {
	getAll: handleGetAll,
	getOne: handleGetOne,
	post: handlePost,
	put: handlePut,
	delete: handleDelete
};
