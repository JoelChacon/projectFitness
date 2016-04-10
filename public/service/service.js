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
				}
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
