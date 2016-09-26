!function (app) {
  'use strict';

  app.controller('TimerSetsController', [
    '$scope', '$state', '$ionicListDelegate',
    function ($scope, $state, $ionicListDelegate) {

      function deleteTimerSet(index) {
        if (confirm('Really delete this timer set?')) {
          $ionicListDelegate.closeOptionButtons();
          $scope.timerSets.splice(index, 1)
        }
      }

      function addTimerSet() {
        var newTimerSet = {
          name: 'NEW TIMER ' + $scope.timerSets.length,
          phases: []
        };
        $scope.timerSets.unshift(newTimerSet);
        $state.go('app.timerSetEdit', {timerSetId: 0});
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
        $state.go('app.timerSetEdit', {timerSetId: index});
      }

      // Initialize timer reset if no timers found
      if (!angular.isArray($scope.timerSets) || 0 === $scope.timerSets.length) {
        $state.go('app.reset', {confirm: 'no'});
      }

      $scope.totalTime = getTotalTimeFromPhases;
      $scope.addTimerSet = addTimerSet;
      $scope.deleteTimerSet = deleteTimerSet;
      $scope.editTimerSet = editTimer;
      $scope.canSwipe = true;
    }]
  );

}(window.angular.module('omtimer'));
