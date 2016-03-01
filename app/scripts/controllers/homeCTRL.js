'use strict';


routerApp
  .controller('homeCTRL', function($window,ergastAPIservice,$rootScope,$scope,$state,$cookies) {
    
    $scope.check_session=function(){
      if(angular.isDefined($cookies.get('token'))){
        //console.log("true");
        return true;
      }
      else{
         //console.log("false");
        return false;
      }
    }

  //   $scope.getUsername=function(){
  //     if(angular.isDefined($cookies.get('otp_flag')))
  //       return $localStorage.username;
  //     else
  //       return "";
  //   }
        
  //   $rootScope.previousState;
  //   $rootScope.currentState;
  //   $rootScope.$on('$stateChangeSuccess', function(ev, to, toParams, from, fromParams) {
  //     $( '.mdl-layout__drawer, .mdl-layout__obfuscator' ).removeClass( 'is-visible' );
  //     $localStorage.previousState = from.name;
  //     $localStorage.currentState = to.name;
  // });
});

