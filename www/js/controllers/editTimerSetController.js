!function (app) {
  'use strict';
  app.controller('EditTimerSetController', [
    'index', 'timerSet', '$scope', '$state', 'timerSetRepository', '$ionicListDelegate',
    function (timerSetId, timerSet, $scope, $state, timerSetRepository, $ionicListDelegate) {

      function editPhase(phaseId) {
        $ionicListDelegate.closeOptionButtons();
        $state.go('app.phaseEdit', {timerSetId: timerSetId, phaseId: phaseId})
      }

      function deletePhase(phaseId, phase) {
        if (confirm('Really delete phase ' + phase.name + '?')) {
          $ionicListDelegate.closeOptionButtons();
          $scope.timerSet = timerSetRepository.removePhase(timerSetId, phaseId);
        }
      }

      $scope.timerSet = timerSet;
      $scope.index = timerSetId;
      $scope.swipeEnabled = true;
      $scope.editPhase = editPhase;
      $scope.deletePhase = deletePhase;

    }]);
}(window.angular.module('omtimer'));
