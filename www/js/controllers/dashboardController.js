!function (app) {
  'use strict';

  app.controller('DashboardController', [
    '$scope', 'timerSetRepository', '$state', '$ionicListDelegate',
    function ($scope, timerSetRepository, $state, $ionicListDelegate) {

      function loadTimerSets() {
        return timerSetRepository.getAll();
      }

      function deleteTimerSet(index) {
        if (confirm('Really delete this timer set?')) {
          $ionicListDelegate.closeOptionButtons();
          $scope.timerSets = timerSetRepository.remove(index);
        }
      }

      function addTimerSet() {
        var newId = timerSetRepository.createNew();
        $state.go('app.editTimerSet', {id: newId});
      }

      function getTotalTimeFromPhases(timerSet) {
        var total = 0, i;
        for (i in timerSet.phases) {
          var phase = timerSet.phases[i];
          total += phase.time;
        }
        return total;
      }

      function editTimer(index) {
        $ionicListDelegate.closeOptionButtons();
        $state.go('app.editTimerSet', {id: index});
      }

      $scope.timerSets = loadTimerSets();
      $scope.totalTime = getTotalTimeFromPhases;
      $scope.addTimerSet = addTimerSet;
      $scope.deleteTimerSet = deleteTimerSet;
      $scope.editTimerSet = editTimer;
      $scope.canSwipe = true;
      $scope.showReorder = false;
    }]
  );


}(window.angular.module('omtimer'));
