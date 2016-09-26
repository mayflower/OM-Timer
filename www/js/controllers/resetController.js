!function (app) {
  'use strict';
  app.controller('ResetController', [
    '$state', 'initialTemplate', '$window', 'confirmation', '$scope',
    function ($state, initialTemplate, $window, confirmation, $scope) {
      if (confirmation === 'no' || confirm('Really reset all data?')) {
        $scope.timerSets.splice(0, $scope.timerSets.length);
        // Don't loose two way data binding. So don't simply overwrite $scope.timerSets
        for (var i in initialTemplate) {
          if (initialTemplate.hasOwnProperty(i)) {
            $scope.timerSets.push(initialTemplate[i]);
          }
        }
        $state.go('app.timerSets', {}, {reload: true});
      }
    }]
  );
}(window.angular.module('omtimer'));
