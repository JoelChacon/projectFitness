angular.module('actvApp').controller('addClientCtrl', function($scope, service, $state, $uibModal) {
$scope.open = function (client) {
    var modalInstance = $uibModal.open({
      animation: true,
      templateUrl: 'html/addClientModal.html',
      controller: 'ModalInstanceCtrl3',
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

angular.module('actvApp').controller('ModalInstanceCtrl3', function ($scope, $uibModalInstance, $state, clientData) {

  $scope.addClient = function() {
    
    service.addClient($scope.client).then(function(res) {
      console.log(res);
    })
    $state.go('dashboard')//this takes you to the dashboard, also I had to inject $state into the controller
  }

	$scope.ok = function () {
	$uibModalInstance.close();
	};

	$scope.cancel = function () {
	$uibModalInstance.dismiss('cancel');
	};

	// $scope.goSomewhere = function(){
	// 	$state.go('dashboard')
	// 	$scope.ok();
	// }

	$scope.client = clientData;
	console.log("client", $scope.client)


});

