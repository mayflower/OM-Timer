!function (app) {
  'use strict';

  app.controller('EditPhaseController', [
    '$scope', 'timerSet', 'timerSetId', 'phaseId', '$state', 'timerSetRepository', '$timeout',
    function ($scope, timerSet, timerSetId, phaseId, $state, timerSetRepository, $timeout) {

      function back() {
        $state.go('app.editTimerSet', {id: timerSetId}, {reload: true});
      }

      function save() {
        var timerSets = timerSetRepository.getAll();
        timerSet.phases[phaseId] = $scope.phase;
        timerSets[timerSetId] = timerSet;
        if (timerSetRepository.save(timerSets)) {
          return $timeout(back);
        }
        alert('Unable to save phase. Please try again.');
      }

      $scope.timerSet = timerSet;
      $scope.phase = timerSet.phases[phaseId];
      $scope.back = back;
      $scope.save = save;
    }
  ]);
}(window.angular.module('omtimer'));