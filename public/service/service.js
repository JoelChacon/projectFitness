app.service('service', function($http, $q) {
	this.addClient = function(client) {
		return $http({
			method: "POST",
			url: '/api/client',
			data: { 
				name: client.name,
				address: client.address,
				body: {
					height: client.height,
					weight: client.weight,
					BMI: client.BMI,
					bodyFatPercentage: client.bodyFat
				},
				email: client.email,
				phone: client.phone,
				notes: client.notes
			}
		})
	}

	this.getClients = function() {
		var dfd = $q.defer();
		$http({
			method:"GET",
			url: '/api/clients'
		}).then(function(res) {
			dfd.resolve(res)
		})
		return dfd.promise;
	}

	this.deleteClient = function(clientID) {
		return $http({
			method: "DELETE",
			url: '/api/client/' + clientID
		})
	}
})


// var client = new mongoose.Schema({
// 	name: String,
// 	// photo: String,
// 	address: String,
// 	body: {
// 		height: String,
// 		weight: String,
// 		BMI: String,
// 		bodyFatPercentage: String
// 	},
// 	email: String,
// 	phone: String,
// 	notes: { type: String, required: false }
// })
