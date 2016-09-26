!function (app) {
  'use strict';
  app.controller('TimerSetController', [
    'timerSetId', '$scope', '$state', '$ionicListDelegate',
    function (timerSetId, $scope, $state, $ionicListDelegate) {

      function editPhase(phaseId) {
        $ionicListDelegate.closeOptionButtons();
        $state.go('app.phaseEdit', {timerSetId: timerSetId, phaseId: phaseId})
      }

      function addPhase() {
        $scope.timerSet.phases.push({});
        $state.go('app.phaseEdit', {timerSetId: timerSetId, phaseId: $scope.timerSet.phases.length - 1});
      }

      function deletePhase(phaseId, phase) {
        if (confirm('Really delete phase ' + phase.name + '?')) {
          $ionicListDelegate.closeOptionButtons();
          $scope.timerSet.phases.splice(phaseId, 1);
        }
      }

      function saveTimerSet() {
        $state.go('app.timerSets');
      }

      $scope.timerSet = $scope.timerSets[timerSetId];
      $scope.editPhase = editPhase;
      $scope.deletePhase = deletePhase;
      $scope.addPhase = addPhase;
      $scope.saveTimerSet = saveTimerSet;

    }]);
}(window.angular.module('omtimer'));
