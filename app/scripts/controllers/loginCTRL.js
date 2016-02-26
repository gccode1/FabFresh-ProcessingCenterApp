'use strict';


routerApp
  .controller('loginCTRL', function($rootScope,$scope, $http, $state,service,$cookies) {
  
  document.body.addEventListener('click', boxCloser, true);
  //$state.go($state.current, {}, {reload: true});
  $scope.$on('LOAD', function() {
        $scope.loading = true
      });
    $scope.$on('UNLOAD', function() {
      $scope.loading = false
    });
    $scope.user = [];
    
       $scope.submitForm = function() {
           $scope.$emit('LOAD');
        $scope.user = {
          "username": $scope.login.email,
          "password": $scope.login.password
        };
        service.login1($scope.user)                 //call to service
        .then(function(data){
          $scope.$emit('UNLOAD');
          if(data.status=="Not Authenticated"){
              alert("Either email or password is wrong");
            } else {
              alert("Now you are logged in");
            $cookies.put('token',data.access_token); 
            
          }    

        },function(error){
          $scope.$emit('UNLOAD');
          alert('Some error occured');
        })
      };

      
    var flag=0;
    $scope.set = function() {
      if(flag)
        return;
      if($scope.login!=undefined && $scope.login.password!=undefined && $scope.login.email!=undefined){
        setClass('#Email');
        setClass('#password');
        flag=1;
      }
    };
      $('.awesome-form .input-group input').focusout(function(){
        var text_val = $(this).val();
        if(text_val === "")
          $(this).removeClass('has-value');
        else {
          $(this).addClass('has-value');
        }
    });

});