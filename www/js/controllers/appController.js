!function (app) {
  'use strict';
  app.controller('AppController', [
    '$rootScope', 'Media', '$scope', 'localStorageService', 'initialTemplate',
    function ($rootScope, Media, $scope, localStorageService, initialTemplate) {
      $rootScope.$on('sound', function (event, phase) {
        var sound = phase.alarmSound;
        // var selfStopping = phase.selfStoppingSound;
        Media.play(sound);
      });

      $scope.unbindLocalStorage = localStorageService.bind($scope, 'timerSets', initialTemplate)

    }]);
}(window.angular.module('omtimer'));
