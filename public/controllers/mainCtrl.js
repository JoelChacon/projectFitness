angular.module('actvApp').controller('mainCtrl', function($scope, $uibModal){

	$scope.open = function (client) {
    var modalInstance = $uibModal.open({
      animation: true,
      templateUrl: 'html/myModalContent.html',
      controller: 'ModalInstanceCtrl',
      size: 'md'
      
    });
  };
  $scope.anjel = 'mijo esta muy shulo'

	$scope.ok = function () {
    $uibModalInstance.close();
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };

})

// Please note that $uibModalInstance represents a modal window (instance) dependency.
// It is not the same as the $uibModal service used above.

angular.module('actvApp').controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, $state) {

  $scope.ok = function () {
    $uibModalInstance.close();
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };

	$scope.goSomewhere = function(){
		$state.go('dashboard')
		$scope.ok();
	}
});
