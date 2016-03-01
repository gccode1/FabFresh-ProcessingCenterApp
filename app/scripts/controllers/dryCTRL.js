'use strict';
routerApp
  .controller('dryCTRL', function($cookies,$state,$scope,ergastAPIservice,$location,$window) {
  	if(angular.isUndefined($cookies.get('token'))){
        $state.go('login');
        alert("Please login to continue");
        return;
      }
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
