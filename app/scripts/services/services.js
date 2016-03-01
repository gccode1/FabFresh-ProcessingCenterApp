'use strict';
angular.module('F1FeederApp.services', []).
  factory('ergastAPIservice', function($http, $q,$cookies) {
    $http.defaults.headers.common.Authorization = 'Bearer '+ $cookies.get('token');
    $http.defaults.headers.post["Content-Type"] = "application/json";
    $http.defaults.headers.patch["Content-Type"] = "application/json";
    var ergastAPI = {};

	var deferred = $q.defer();

	var URL = 'http://fabfresh.elasticbeanstalk.com';
 // var URL = 'http://localhost:8000'
  //var URL = 'http://fabfresh-dev.elasticbeanstalk.com'
  
  ergastAPI.login = function(us){
      var deferl = $q.defer();
      $http({
      method  : 'POST',
      url     : URL+'/users/login/',
      data    : us,
      headers : {'Content-Type': 'application/json'} 
     })
      .success(function(response){
        deferl.resolve(response);
    })
    .error(function(error,status){
      deferl.reject(error);
    })

    return deferl.promise

    };


	ergastAPI.getOrders = function() {

		return $http({
		    url : URL + '/orders.json',
		    method : 'GET'
		})
			.then(function(response){
				deferred.resolve(response.data);
                		return deferred.promise;
            		},function(response){
				deferred.reject(response);
                		return deferred.promise;			
			});
	};

  

  // ergastAPI.getOrderByStatus = function(status) {
  //   return $http({
  //       url : URL + '/orders/?status='+status,
  //       method : 'GET'
  //   })
  //     .success(function(response){
  //       console.log(response.data);
  //       deferred.resolve(response.data);
  //                   return deferred.promise;
  //               },function(response){
  //       deferred.reject(response);
  //                   return deferred.promise;      
  //     });
  // };

  ergastAPI.getOrderByStatus= function(status){
    var deferotp = $q.defer();
    $http({
        url : URL + '/orders/?status='+status,
        method : 'GET'
    })
    .success(function(response){
        //console.log(response);
        deferotp.resolve(response);
    })
    .error(function(error){
      deferotp.reject(error);
    })

   return deferotp.promise;
  };

  // ergastAPI.getOrderDetails = function(id){
  //     return $http({
  // method : 'GET',
  //       url : URL + '/orders/'+ id + '.json'
  //     })
  //     .then(function(response){
  //           deferred.resolve(response.data);
  //               return deferred.promise;
  //               },function(response){
  //                   deferred.reject(response);
  //                       return deferred.promise;
  //               });
  //   };

     ergastAPI.getOrderDetails = function(id){
      var deferotp = $q.defer();
        $http({
            url : URL + '/orders/'+ id + '.json',
            method : 'GET'
        })
        .success(function(response){
            //console.log(response);
            deferotp.resolve(response);
        })
        .error(function(error){
          deferotp.reject(error);
        })

       return deferotp.promise;
    };



  ergastAPI.updateOrderStatus= function(id,status1){
    var deferotp = $q.defer();
    var order = {
        "status": status1
    };
    $http({
      method  : 'PATCH',
      url     : URL+'/orders/'+id+'/',
      data    : order,
      headers : {'Authorization': 'Bearer hari', 'Content-Type': 'application/json'} 
     })
    .success(function(response){
        deferotp.resolve(response);
    })
    .error(function(error){
      deferotp.reject(error);
    })

   return deferotp.promise
  };


  ergastAPI.getClothType = function() {
    var deferredType = $q.defer();
    return $http({
        url : URL + '/cloth/type/',
        method : 'GET'
    })
      .then(function(response){
        deferredType.resolve(response.data);
                    return deferredType.promise;
                },function(response){
        deferredType.reject(response);
                    return deferredType.promise;      
      });
  };


  ergastAPI.getClothPrice = function(id){
      var deferredPrice = $q.defer();
      return $http({
          //url : URL + '/order/reciept?id=45.json',
          method : 'GET',
          url : URL + '/order/reciept/',  
          params: {
            "id" : id
          }
      }).then(function(response){
            deferredPrice.resolve(response.data);
                return deferredPrice.promise;
                },function(response){
                    deferredPrice.reject(response);
                        return deferredPrice.promise;
                });
  };
	
	//orderslist with status params
  ergastAPI.orderListStatus = function(id){
      var deferredPrice = $q.defer();
      return $http({
          method : 'GET',
          url : URL + '/orders/',  
          params: {
            "status" : id
          }
      }).then(function(response){
            deferredPrice.resolve(response.data);
                return deferredPrice.promise;
                },function(response){
                    deferredPrice.reject(response);
                        return deferredPrice.promise;
                });
  };


  ergastAPI.getClothBrand = function() {
    var deferredBrand = $q.defer();
    return $http({
        url : URL + '/cloth/brand/',
        method : 'GET'
    })
      .then(function(response){
        deferredBrand.resolve(response.data);
                    return deferredBrand.promise;
                },function(response){
        deferredBrand.reject(response);
                    return deferredBrand.promise;      
      });
  };  

  ergastAPI.getClothColor = function() {
    var deferredColor = $q.defer();
    return $http({
        url : URL + '/cloth/color/',
        method : 'GET'
    })
      .then(function(response){
        deferredColor.resolve(response.data);
                    return deferredColor.promise;
                },function(response){
        deferredColor.reject(response);
                    return deferredColor.promise;      
      });
  };

  //For Size
  ergastAPI.getClothSize = function() {
    var deferredSize = $q.defer();
    return $http({
        url : URL + '/cloth/size/',
        method : 'GET'
    })
      .then(function(response){
        deferredSize.resolve(response.data);
                    return deferredSize.promise;
                },function(response){
        deferredSize.reject(response);
                    return deferredSize.promise;      
      });
  };


	ergastAPI.setStatusIron = function(id){
      //deferred = $q.defer();
      var data = {
        "status" : 5
     };
      return $http({
        data : data,
        method : 'PATCH',
        url : URL + '/orders/' +id+ '.json'
      })
      .then(function(response){
            deferred.resolve(response.data);
                return deferred.promise;
                },function(response){
                    deferred.reject(response);
                        return deferred.promise;
                });
    };

	
    ergastAPI.setCloths = function(data){
      var deferredCloths = $q.defer();
      return $http({
        data : data,
        method : 'POST',
        url: URL + '/cloth/cloths/'
      }).then(function(response){
            deferredCloths.resolve(response.data);
                return deferredCloths.promise;
                },function(response){
                    deferredCloths.reject(response);
                        return deferredCloths.promise;
                });
    };

    ergastAPI.setAmount = function(amount,id,weight,quantity){
      var data = {
        "weight" : weight,
        "quantity" : quantity,
        "status" : "5",
        "id" : id
      };

      return $http({
        data : data,
        method : 'POST',
        url: URL + '/setAmount/'
      }).then(function(response){
            deferred.resolve(response.data);
                return deferred.promise;
                },function(response){
                    deferred.reject(response);
                        return deferred.promise;
                });
    };

    
  

    return ergastAPI;
  });
