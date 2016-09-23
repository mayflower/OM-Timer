!function (app) {
  'use strict';

  app.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  });
  app.config(function (localStorageServiceProvider) {
    localStorageServiceProvider.setPrefix('omtimer.1');
  })
}(angular.module('omtimer', ['ionic', 'LocalStorageModule']));

/**
 // angular.module is a global place for creating, registering and retrieving Angular modules
 // 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
 // the 2nd parameter is an array of 'requires'
 // 'starter.controllers' is found in controllers.js


 // .state('app.search', {
  //   url: '/search',
  //   views: {
  //     'menuContent': {
  //       templateUrl: 'templates/search.html'
  //     }
  //   }
  // })
 //
 // .state('app.browse', {
  //   url: '/browse',
  //   views: {
  //     'menuContent': {
  //       templateUrl: 'templates/browse.html'
  //     }
  //   }
  // })

 **/
