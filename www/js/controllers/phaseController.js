!function (app) {
  'use strict';

  app.controller('PhaseController', [
    '$scope', 'timerSetId', 'phaseId', '$state',
    function ($scope, timerSetId, phaseId, $state) {

      function save() {
        $state.go('app.timerSetEdit', {timerSetId: timerSetId});
      }

      $scope.timerSet = $scope.timerSets[timerSetId];
      $scope.phase = $scope.timerSet.phases[phaseId];
      $scope.save = save;
    }
  ]);
}(window.angular.module('omtimer'));
