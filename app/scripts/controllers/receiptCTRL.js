'use strict';
routerApp
  .controller('receiptCTRL', function($cookies,$state, $rootScope,$scope,ergastAPIservice,$location,$window) {
    if(angular.isUndefined($cookies.get('token'))){
        $state.go('login');
        alert("Please login to continue");
        return;
      }
    $scope.ordersList = [];
	    ergastAPIservice.getOrderByStatus(10)
	     .then(
			function(response){
				 for(var i=0;i<response.length;i++)
				 	$scope.ordersList.push(response[i]);
			},
			function(httpError){
				throw httpError.status;
			}
		);
	    ergastAPIservice.getOrderByStatus(11)
	     .then(
			function(response){
				for(var i=0;i<response.length;i++)
				 	$scope.ordersList.push(response[i]);
			},
			function(httpError){
				throw httpError.status;
			}
		);



	    $scope.goToInvoice = function(x) {
	      	$rootScope.orderid=x;
	      	$state.go("invoice");
	    };
	    $scope.searchFilter = function (x) {
	        var re = new RegExp($scope.nameFilter, 'i');
	        return !$scope.nameFilter || re.test(x.id) ;
	      };
  });
