'use strict';
routerApp
  .controller('precheckCTRL', function($state,$rootScope,$scope,ergastAPIservice,$location,$window) {
      $scope.ordersList = [];
	    ergastAPIservice.getOrderByStatus(4)
	     .then(
			function(response){
				 $scope.ordersList = response;
			},
			function(httpError){
				throw httpError.status;
			}
		);

	     $scope.updateOrderStatus = function(id) {
	      ergastAPIservice.updateOrderStatus(id,5)
	      .then(function(reponse){
	        alert('Order is updated to tagging');
	        ergastAPIservice.getOrderByStatus(4)
		     .then(
				function(response){
					 $scope.ordersList = response;
				},
				function(httpError){
					throw httpError.status;
				}
			);
	        
	      },function(error){
	          alert("Some Error occured");
	      })
	    };

	    $scope.goToOrders= function(id) {
	      $rootScope.orderid=id;
	      $state.go('orders');
	    };
	    $scope.searchFilter = function (x) {
	        var re = new RegExp($scope.nameFilter, 'i');
	        return !$scope.nameFilter || re.test(x.id) ;
	      };
  });
