!function (app) {
  'use strict';

  var $runningInterval;

  app.controller('CountDownController', [
    '$scope', 'timerSet', '$interval',
    function ($scope, timerSet, $interval) {

      var currentPhaseId = 0;
      var oneSecond = 1000;

      function countDown() {
        $scope.time--;
        if ($scope.time < 0) {
          try {
            nextPhase();
            $scope.$emit('sound', $scope.currentPhase);
          } catch (err) {
            stopCountDown();
          }
        }
      }

      function previousPhase() {
        currentPhaseId--;
        if (0 > currentPhaseId) {
          currentPhaseId = 0;
          throw 'Already first phase';
        }
        switchPhase();
      }

      function nextPhase() {
        currentPhaseId++;
        if (timerSet.phases.length <= currentPhaseId) {
          currentPhaseId = timerSet.phases.length - 1;
          throw 'Already last phase'
        }
        switchPhase();
      }

      function switchPhase() {
        $scope.currentPhase = timerSet.phases[currentPhaseId];
        $scope.time = $scope.currentPhase.time;
      }

      function startCountDown() {
        $scope.running = true;
        $scope.resetted = false;
        $runningInterval = $interval(countDown, oneSecond);
      }

      function stopCountDown() {
        $scope.running = false;
        $interval.cancel($runningInterval);
        $runningInterval = undefined;
      }

      function resetCountDown() {
        currentPhaseId = 0;
        $scope.time = 0;
        $scope.resetted = true;
        stopCountDown();
        switchPhase();
      }

      $scope.running = false;
      $scope.resetted = true;
      $scope.currentPhase = timerSet.phases[currentPhaseId];
      $scope.time = $scope.currentPhase.time;
      $scope.timerSet = timerSet;
      $scope.resetCountDown = resetCountDown;
      $scope.startCountDown = startCountDown;
      $scope.stopCountDown = stopCountDown;
      $scope.previousPhase = previousPhase;
      $scope.nextPhase = nextPhase;
      // Make sure that the interval is destroyed too
      $scope.$on('$destroy', function () {
        stopCountDown();
      });
    }]);

}(window.angular.module('omtimer'));
