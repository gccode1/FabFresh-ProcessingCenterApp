'use strict';
routerApp
  .controller('invoiceCTRL', function($cookies,$state,$rootScope,$scope,ergastAPIservice,$location,$window) {
    if(angular.isUndefined($cookies.get('token'))){
        $state.go('login');
        alert("Please login to continue");
        return;
      }
    if(!$rootScope.orderid){
  		$state.go("receipt");
  		return;
  	}
  	else{
  		$scope.id=$rootScope.orderid;

  	}

      ergastAPIservice.getOrderDetails($scope.id)
        .then(
        function(response){
          if(response.afterDiscount==null)
            response.afterDiscount=response.amount;
           $scope.order = response;
          },
        function(httpError){
          throw httpError.status;   
        }
    );

     
});
