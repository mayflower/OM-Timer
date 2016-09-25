!function (app) {
  'use strict';
  app.controller('AppController', [
    '$rootScope', 'Media',
    function ($rootScope, Media) {
      $rootScope.$on('sound', function (event, phase) {
        var sound = phase.alarmSound;
        var selfStopping = phase.selfStoppingSound;
        Media.play(sound);
      });
    }]);
}(window.angular.module('omtimer'));
