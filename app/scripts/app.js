'use strict';

var routerApp = angular.module('routerApp', [
    'F1FeederApp.services',
    'ui.router',
    'ngCookies',
    ]);
 
routerApp.config(function($stateProvider, $urlRouterProvider ) {
    
    $urlRouterProvider.otherwise('/home');

    $stateProvider
        
        .state('login', {
            url: '/login',
            templateUrl: '../views/login.html',
            controller: 'loginCTRL',
        })
        .state('main', {
            url: '/main',
            templateUrl: '../views/main.html',
            //controller: 'mainCTRL',
        })
        .state('orders', {
            url: '/orders',
            templateUrl: '../views/orders.html',
            controller: 'ordersCTRL',
        })
        .state('created', {
            url: '/created',
            templateUrl: '../views/created.html',
            controller: 'createdCTRL',
        })
        .state('received', {
            url: '/received',
            templateUrl: '../views/received.html',
            controller: 'receivedCTRL'
        })
        .state('precheck', {
            url: '/precheck',
            templateUrl: '../views/precheck.html',
            controller: 'precheckCTRL'
        })
        .state('tagging', {
            url: '/tagging',
            templateUrl: '../views/tagging.html',
            controller: 'taggingCTRL',
        })
        .state('wash', {
            url: '/wash',
            templateUrl: '../views/wash.html',
            controller: 'washCTRL',
        })
         .state('dry', {
            url: '/dry',
            templateUrl: '../views/dry.html',
            controller: 'dryCTRL'
        })
        .state('iron', {
            url: '/iron',
            templateUrl: '../views/iron.html',
            controller: 'ironCTRL'
        })
        .state('ship', {
            url: '/ship',
            templateUrl: '../views/ship.html',
            controller: 'shipCTRL',
        })
        .state('slip', {
            url: '/slip',
            templateUrl: '../views/slip.html',
            controller: 'slipCTRL',
        })

        .state('invoice', {
            url: '/invoice',
            templateUrl: '../views/invoice.html',
            controller: 'invoiceCTRL'
        })
        
        .state('receipt', {
            url: '/receipt',
            templateUrl: '../views/receipt.html',
            controller: 'receiptCTRL'
        })
        .state('about', {
            url: '/about',
            templateUrl: '../views/about.html',
            controller: 'aboutCTRL',
        })
        
        .state('logout', {
            url: '/#',
            //templateUrl: '../views/logout.html',
            controller: 'logoutCTRL',
        })
        
});
/*
routerApp.factory('UserService', function() {
    return {
        name : ''
    };
});*/   
