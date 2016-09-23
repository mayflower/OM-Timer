!function (app) {
  'use strict';

  var modalPhaseEditUrl = 'templates/phase-modal.html';

  app.controller('EditPhaseController', [
    '$scope', 'timerSet', 'timerSetId', 'phaseId', '$state',
    function ($scope, timerSet, timerSetId, phaseId, $state) {

      $scope.timerSet = timerSet;
      $scope.phase = timerSet.phases[phaseId];
      $scope.back = back;

      function back() {
        $state.go('app.editTimerSet', {id: timerSetId})
      }

      function save() {
        return;
        // New isolated scope for the modal
        var scope = $scope.$new(true);
        scope.phase = phase;

        $ionicModal.fromTemplateUrl(modalPhaseEditUrl, {
          scope: scope,
          focusFirstInput: true
        }).then(function (modal) {
          modal.show();
        });

        scope.save = function (phase) {
          console.log('Save', $scope.vm.set, phase);
          console.log($scope.vm.set.phases.indexOf(phase));
          modal.hide();
        };

        scope.closeModal = function () {
          modal.hide();
        };
        //Cleanup the modal when we're done with it!
        scope.$on('$destroy', function () {
          modal.remove();
        });
        // Execute action on hide modal
        scope.$on('modal.hidden', function () {
        });
        // Execute action on remove modal
        scope.$on('modal.removed', function () {
        });
      }
    }]);
}(window.angular.module('omtimer'));