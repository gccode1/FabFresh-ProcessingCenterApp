'use strict';
routerApp
  .controller('shipCTRL', function($scope,ergastAPIservice,$location,$window) {
       $scope.ordersList = [];
	    ergastAPIservice.getOrderByStatus(9)
	     .then(
			function(response){
				 $scope.ordersList = response;
			},
			function(httpError){
				throw httpError.status;
			}
		);


	     $scope.updateOrderStatus = function(id) {
	      ergastAPIservice.updateOrderStatus(id,10)
	      .then(function(reponse){
	        alert('Order is updated to shipped');
	        ergastAPIservice.getOrderByStatus(9)
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
	    $scope.searchFilter = function (x) {
	        var re = new RegExp($scope.nameFilter, 'i');
	        return !$scope.nameFilter || re.test(x.id) ;
	      };
  });
