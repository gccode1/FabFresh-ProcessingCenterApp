'use strict';
routerApp
  .controller('washCTRL', function($scope,ergastAPIservice,$location,$window) {
  	  $scope.ordersList = [];
	    ergastAPIservice.getOrderByStatus(6)
	     .then(
			function(response){
				 $scope.ordersList = response;
			},
			function(httpError){
				throw httpError.status;
			}
		);

	      $scope.updateOrderStatus = function(id) {
	      ergastAPIservice.updateOrderStatus(id,7)
	      .then(function(reponse){
	        alert('Order is updated to dry');
	        ergastAPIservice.getOrderByStatus(6)
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
