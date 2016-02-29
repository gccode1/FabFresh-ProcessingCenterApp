'use strict';
routerApp
  .controller('receivedCTRL', function($state,$scope,ergastAPIservice,$location,$window) {
     $scope.ordersList = [];
	    ergastAPIservice.getOrderByStatus(3)
	     .then(
			function(response){
				 $scope.ordersList = response;
			},
			function(httpError){
				throw httpError.status;
			}
		);

	     $scope.updateOrderStatus = function(id) {
	      ergastAPIservice.updateOrderStatus(id,4)
	      .then(function(reponse){
	        alert('Order is updated to precheck');
	        ergastAPIservice.getOrderByStatus(3)
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
  });
