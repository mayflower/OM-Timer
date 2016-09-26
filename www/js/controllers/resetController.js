!function (app) {
  'use strict';
  app.controller('ResetController', [
    '$state', 'initialTemplate', '$window', 'confirmation', '$scope', 'localStorageService',
    function ($state, initialTemplate, $window, confirmation, $scope, localStorageService) {
      if (confirmation === 'no' || confirm('Really reset all data?')) {
        $scope.unbindLocalStorage();
        localStorageService.set('timerSets', initialTemplate);
        $window.location.href = '/';
      }
    }]
  );
}(window.angular.module('omtimer'));
