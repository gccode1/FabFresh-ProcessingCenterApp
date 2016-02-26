'use strict'

angular.module('routerApp')
 .service('service',function service($http,$q,$rootScope,$cookies){ var URL = 'http://fabfresh-dev.elasticbeanstalk.com';
  var service = this;
      service.taskList = {};



    service.login1 = function(us){
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

    




  return service;
 });



routerApp.factory('userService', ['$rootScope', function ($rootScope) {

    var service = {
      
        model: {
            name: '',
            email: ''
        },

        SaveState: function () {
            sessionStorage.userService = angular.toJson(service.model);
        },

        RestoreState: function () {
            service.model = angular.fromJson(sessionStorage.userService);
        }
    }

    $rootScope.$on("savestate", service.SaveState);
    $rootScope.$on("restorestate", service.RestoreState);

    return service;
}]);