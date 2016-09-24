!function (app) {
  'use strict';

  app.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {

      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);
        console.log(StatusBar);
      }

      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }

      // angular.isDefined($cordovaPlugin) && $cordovaPlugin.someFunction().then(success, error);

    });
  });
  //
  // app.config('fpp', ['$rootScope', function ($rootScope) {
  //   $rootScope.$on('sound', function (event, mass) {
  //     console.log('SOUND', mass);
  //   });
  // }])
}(angular.module('omtimer', ['ionic', 'LocalStorageModule', 'ngCordova']));
