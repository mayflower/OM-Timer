!function (app) {
  'use strict';

  app.controller('TimerSetsController', [
    '$scope', '$state', '$ionicListDelegate', '$ionicActionSheet', '$timeout',
    function ($scope, $state, $ionicListDelegate, $ionicActionSheet, $timeout) {

      function deleteTimerSet(index) {
        if (confirm('Really delete this timer?')) {
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


      // Triggered on a button click, or some other target
      $scope.show = function (timer, idx) {

        // Show the action sheet
        var hideSheet = $ionicActionSheet.show({
          buttons: [
            {text: 'Start Timer'},
            {text: 'Edit Timer'},
          ],
          destructiveText: 'Delete Timer',
          destructiveButtonClicked: function () {
            deleteTimerSet(idx);
            hideSheet();
          },
          titleText: 'Modify timer "' + timer.name + '"',
          cancelText: 'Cancel',
          cancel: function () {
            // add cancel code..
          },
          buttonClicked: function (index) {
            switch (index) {
              case 0:
                $state.go("app.countDown", {timerSetId: idx});
                break;
              case 1:
                editTimer(idx);
                break;
              default:
                hideSheet();
                break;
            }
            hideSheet();
            return true;
          }
        });

        // For example's sake, hide the sheet after two seconds
        // $timeout(function () {
        //   hideSheet();
        // }, 2000);
      };

    }]
  );

}(window.angular.module('omtimer'));
