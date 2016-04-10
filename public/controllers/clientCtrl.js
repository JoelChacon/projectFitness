angular.module('actvApp').controller('clientCtrl', function($scope, service, $state) {

	$scope.addClient = function() {
		
		service.addClient($scope.client).then(function(res) {
			console.log(res);
		})
		$state.go('dashboard')//this takes you to the dashboard, also I had to inject $state into the controller
	}
	$scope.getClients = function() {
		service.getClients().then(function(res) {
			$scope.clients = res.data;
			console.log($scope.clients);
		})
	}
	$scope.getClients();

	$scope.deleteClient = function(id) {
		service.deleteClient(id).then(function(response) {
			$scope.getClients();
		})
		console.log(id)
	}
	$scope.areYouSure = function(id) {
		if(confirm("Are You Sure?")) {
			$scope.deleteClient(id);
		}
	}
	// $scope.myProfile = {
	// 	name: "Joel Chacon",
	// 	friends: [{name: 'Ryan'}, {name: 'Bryan'}, 
	// 	{name: 'Sarah'}, {name: 'Zac'}, {name: 'Erin'}]
	// };
	// $scope.sortOptions = [{
	// 	display: 'Ascending'
	// 	, value: false
	// },
	// {
	// 	display: 'Descending'
	// 	, value: true
	// }
	// ];
})



// client._id


	// $scope.addClient = function() {
	// 	if()
	// 	service.addClient($scope.client).then(function(res) {
	// 		console.log(res);
	// 	})