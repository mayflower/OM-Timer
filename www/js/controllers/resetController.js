!function (app) {
  'use strict';
  app.controller('ResetController', [
    '$state', 'initialTemplate', '$window', 'confirmation', '$scope',
    function ($state, initialTemplate, $window, confirmation, $scope) {
      if (confirmation === 'no' || confirm('Really reset all data?')) {
        $scope.timerSets.splice(0, $scope.timerSets.length);
        for (var i in initialTemplate) {
          if (initialTemplate.hasOwnProperty(i)) {
            $scope.timerSets.push(initialTemplate[i]);
          }
        }
        $state.go('app.timerSets', {}, {reload: true, location: 'replace'});
      }
    }]
  );
}(window.angular.module('omtimer'));
