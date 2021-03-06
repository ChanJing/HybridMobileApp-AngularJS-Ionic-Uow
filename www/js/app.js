// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','ngCordova','starter.controllers','starter.directives','starter.services','ionic.rating'])

.run(function($ionicPlatform,$cordovaFileTransfer,$http) {
    $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
        if(window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if(window.StatusBar) {
            StatusBar.styleDefault();
        }        
  });
})

.config(function($stateProvider,$urlRouterProvider,$ionicConfigProvider){
    $ionicConfigProvider.tabs.position('bottom');
    
    $stateProvider
    //setup an abstract state for the tabs directive
    .state('tab',{
        url:'/tab',
        abstract:true,
        templateUrl:"template/tabs.html"
    })
    
    //Each tab has its own nav history stack:
    .state('home',{
        url:'/home',
        parent:'tab',
        views:{
            'tab-home':{
                templateUrl:'template/tab-home.html',
                controller:'homeCtrl'
            }
        }
    })
    .state('order',{
        url:'/order',
        parent:'tab',
        views:{
            'tab-order':{
                templateUrl:'template/tab-order.html',
                controller:'orderCtrl'
            }
        }
    })
    .state('account',{
        url:'/account',
        parent:'tab',
        views:{
            'tab-account':{
                templateUrl:'template/tab-account.html',
                controller:'accountCtrl'
            }
        }
    })
    
    //
    .state('menu',{
        // url is what to show in address bar
        //{{id}} is the params(parameters) passing to menu states
        url:'/home/menu/{list}',
        parent:'tab',
        views:{
            'tab-home':{
                templateUrl:'template/menu.html',
                controller:'menuCtrl'
            }
        }
    })

    .state('confirmOrder',{
        // url is what to show in address bar
        //{{id}} is the params(parameters) passing to menu states
        url:'/home/menu/confirm-order',
        parent:'tab',
        views:{
            'tab-home':{
                templateUrl:'template/confirm-order.html'
                // controller:'confirmOrderCtrl'
            }
        }
    })
    
    
    
    //if none of the above states are matched, use this as the callback
    $urlRouterProvider.otherwise('/tab/home');
})
