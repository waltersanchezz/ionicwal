// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})


.config(function($stateProvider, $urlRouterProvider){
  
  $stateProvider
  
  .state('home', {
    cache:false,
    url: '/home',
    templateUrl:'game/home.html'
  })

  .state('ps3', {
    cache:false,
    url: '/ps3',
    templateUrl:'game/ps3.html',
    controller:'ps3Controller'
  })

  .state('splinterC', {
    cache:false,
    url: '/splinter',
    templateUrl:'game/splinter.html'
  })

  .state('mortalK', {
    cache:false,
    url: '/mortal',
    templateUrl:'game/mortal.html'
  })

  .state('Gta5', {
    cache:false,
    url: '/gta5',
    templateUrl:'game/gta5.html'
  })


  .state('Verps3', {
    cache:false,
    url: '/verPs3',
    templateUrl:'game/verPs3.html',
    controller:'VerPs3Controller'
  })

  .state('ps4', {
    cache:false,
    url: '/ps4',
    templateUrl:'game/ps4.html',
    controller:'ps4Controller'
  })

  .state('Horizon', {
    cache:false,
    url: '/horizon',
    templateUrl:'game/horizon.html'
  })

  .state('FIfa', {
    cache:false,
    url: '/fifa',
    templateUrl:'game/fifa.html'
  })

  .state('Assassin', {
    cache:false,
    url: '/assassin',
    templateUrl:'game/assassin.html'
  })

  .state('Verps4', {
    cache:false,
    url: '/verPs4',
    templateUrl:'game/verPs4.html',
    controller:'VerPs4Controller'
  })

  .state('comentarios', {
    cache:false,
    url: '/comentarios',
    templateUrl:'game/comentarios.html',
    controller:'comentariosController'
  })

  .state('Vercomentarios', {
    cache:false,
    url: '/VerComentarios',
    templateUrl:'game/VerComentarios.html',
    controller:'VerComentarioController'
  });


  $urlRouterProvider.otherwise('/home');
  
});

