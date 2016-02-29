'use strict';
routerApp
  .controller('createdCTRL', function($scope,ergastAPIservice,$location,$window) {
	     $scope.ordersList = [];
	    ergastAPIservice.getOrderByStatus(2)
	     .then(
			function(response){
				 $scope.ordersList = response;
			},
			function(httpError){
				throw httpError.status;
			}
		);


	 $scope.updateOrderStatus = function(id) {
      ergastAPIservice.updateOrderStatus(id,3)
      .then(function(reponse){
        alert('Order is updated to received');
        ergastAPIservice.getOrderByStatus(2)
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