angular.module('actvApp').controller('clientCtrl', function($scope, service, $state, $uibModal) {

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
  //addModal
	$scope.openAdd = function () {
    var modalInstance = $uibModal.open({
      animation: true,
      templateUrl: 'html/addClientModal.html',
      controller: 'ModalInstanceCtrl3',
      size: 'lg'
    });
  };


/////seeModal//////
$scope.openSee = function (client) {
    var modalInstance = $uibModal.open({
      animation: true,
      templateUrl: 'html/clientProfile.html',
      controller: 'ModalInstanceCtrl2',
      size: 'lg',
      resolve: {
      	clientData: client
      }
      
    });
  };


	$scope.ok = function () {
    $uibModalInstance.close();
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };

})

// Please note that $uibModalInstance represents a modal window (instance) dependency.
// It is not the same as the $uibModal service used above.

angular.module('actvApp').controller('ModalInstanceCtrl2', function ($scope, $uibModalInstance, $state, clientData) {

	$scope.ok = function () {
	$uibModalInstance.close();
	};

	$scope.cancel = function () {
	$uibModalInstance.dismiss('cancel');
	};


	$scope.client = clientData;
	console.log("client", $scope.client)


});
//add modal controller


// Please note that $uibModalInstance represents a modal window (instance) dependency.
// It is not the same as the $uibModal service used above.

angular.module('actvApp').controller('ModalInstanceCtrl3', function ($scope, service,  $uibModalInstance, $state) {

  $scope.addClient = function() {
    // console.log("adding", res)
    service.addClient($scope.newClient).then(function(res) {
      console.log(res);
      $scope.newClient = {};
	  $state.reload();     
      $scope.cancel();
    })
   
  }

	$scope.ok = function () {
	$uibModalInstance.close();
	};

	$scope.cancel = function () {
	$uibModalInstance.dismiss('cancel');
	};
});





