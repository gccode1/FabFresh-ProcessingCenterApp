'use strict';
routerApp
  .controller('dryCTRL', function($scope,ergastAPIservice,$location,$window) {
  	   $scope.ordersList = [];
	    ergastAPIservice.getOrderByStatus(7)
	     .then(
			function(response){
				 $scope.ordersList = response;
			},
			function(httpError){
				throw httpError.status;
			}
		);

	     $scope.updateOrderStatus = function(id) {
	      ergastAPIservice.updateOrderStatus(id,8)
	      .then(function(reponse){
	        alert('Order is updated to iron');
	        ergastAPIservice.getOrderByStatus(7)
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
