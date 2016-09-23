!function (app) {
  'use strict';
  app.controller('EditTimerSetController', [
    'index', 'timerSet', '$scope', '$state', 'timerSetRepository', '$ionicListDelegate',
    function (timerSetId, timerSet, $scope, $state, timerSetRepository, $ionicListDelegate) {
      $scope.timerSet = timerSet;
      $scope.index = timerSetId;
      $scope.swipeEnabled = true;
      $scope.editPhase = editPhase;
      $scope.deletePhase = deletePhase;

      function editPhase(phaseId) {
        $ionicListDelegate.closeOptionButtons();
        $state.go('app.phase-edit', {timerSetId: timerSetId, phaseId: phaseId})
      }

      function deletePhase(phaseId, phase) {
        if (confirm('Really delete phase ' + phase.name + '?')) {
          $ionicListDelegate.closeOptionButtons();
          $scope.timerSet = timerSetRepository.removePhase(timerSetId, phaseId);
        }
      }
    }]);
}(window.angular.module('omtimer'));
