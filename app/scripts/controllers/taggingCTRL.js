'use strict';
routerApp
  .controller('taggingCTRL', function($scope,ergastAPIservice,$location,$window) {
  	   $scope.ordersList = [];
  	  
	    ergastAPIservice.getOrderByStatus(5)
	     .then(
			function(response){
				 $scope.ordersList = response;
			},
			function(httpError){
				throw httpError.status;
			}
		);


	     $scope.updateOrderStatus = function(id) {
	      ergastAPIservice.updateOrderStatus(id,6)
	      .then(function(reponse){
	        alert('Order is updated to wash');
	        ergastAPIservice.getOrderByStatus(5)
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
