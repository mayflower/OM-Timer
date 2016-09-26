!function (app) {
  'use strict';
  app.controller('AppController', [
    '$rootScope', 'Media', '$scope', 'localStorageService',
    function ($rootScope, Media, $scope, localStorageService) {
      $rootScope.$on('sound', function (event, phase) {
        var sound = phase.alarmSound;
        // var selfStopping = phase.selfStoppingSound;
        Media.play(sound);
      });

      $scope.unbindLocalStorage = localStorageService.bind($scope, 'timerSets', [])

    }]);
}(window.angular.module('omtimer'));
