!function (app) {
  'use strict';

  var STORAGE_KEY = 'timerSets';

  app.factory('timerSetRepository', [
    'initFactory', 'localStorageService',
    function (initFactory, localStorageService) {

      function save(overwrite) {
        var timerSets;
        if (angular.isDefined(overwrite) && angular.isObject(overwrite)) {
          timerSets = overwrite;
        } else {
          timerSets = localStorageService.get(STORAGE_KEY);
        }
        return localStorageService.set(STORAGE_KEY, timerSets);
      }

      function createNew() {
        var timerSets = localStorageService.get(STORAGE_KEY);
        var newTimerSet = {
          name: 'NEW TIMER',
          phases: []
        };
        save(timerSets.push(newTimerSet));
        return timerSets.length - 1;
      }

      function reset() {
        return save(initFactory);
      }

      function remove(index) {
        var timerSets = localStorageService.get(STORAGE_KEY);
        timerSets.splice(index, 1);
        localStorageService.set(STORAGE_KEY, timerSets);
        return timerSets;
      }

      function getByIndex(idx) {
        var timerSets = localStorageService.get(STORAGE_KEY);
        return timerSets[idx];
      }

      function removePhase(timerSetId, phaseId) {
        var timerSets = localStorageService.get(STORAGE_KEY);
        var timerSet = timerSets[timerSetId];
        timerSet.phases.splice(phaseId, 1);
        timerSets[timerSetId] = timerSet;
        localStorageService.set(STORAGE_KEY, timerSets);
        return timerSet;
      }

      function getAll() {
        var timerSets = localStorageService.get(STORAGE_KEY);
        if (!timerSets) {
          timerSets = reset();
        }
        return timerSets;
      }

      return {
        getAll: getAll,
        remove: remove,
        getByIndex: getByIndex,
        removePhase: removePhase,
        reset: reset,
        createNew: createNew,
        save: save
      };

    }]);
}(window.angular.module('omtimer'));
