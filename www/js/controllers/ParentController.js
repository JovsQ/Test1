test1.controller("ParentController", ['$scope', '$state', '$log', 
	function($scope, $state, $log) {

	$scope.goToParent = function() {
		$log.log("go to parent!");
		$state.go("parent");
	}

	$scope.goToFirstChild = function() {
		$log.log("go to first child!");
		$state.go("first-child");
	}

	$scope.goToSecondChild = function() {
		$state.go("second-child");
	}

	$scope.checkFunction = function() {
		// Conseole.log("clicked");
		$log.log("$log clicked");
		$state.go("first-child");
	}

}]);