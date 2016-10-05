app.service('service', function($http, $q) {
	//this adds a client
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
	//this gets all the clients
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


	//this deletes a client
	this.deleteClient = function(clientID) {
		return $http.delete('/api/client/' + clientID)
	}
})