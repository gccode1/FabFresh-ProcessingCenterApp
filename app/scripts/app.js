'use strict';

var routerApp = angular.module('routerApp', [
    'ui.router',
    'ngCookies',
    ]);
 
routerApp.config(function($stateProvider, $urlRouterProvider ) {
    
    $urlRouterProvider.otherwise('/home');

    $stateProvider
        
        .state('login', {
            url: '/#',
            templateUrl: '../views/login.html',
            controller: 'loginCTRL',
        })
        
        
});
/*
routerApp.factory('UserService', function() {
    return {
        name : ''
    };
});*/   
