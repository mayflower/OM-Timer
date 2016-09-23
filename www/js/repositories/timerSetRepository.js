!function (app) {
  'use strict';

  var STORAGE_KEY = 'timerSets';

  app.factory('timerSetRepository', [
    '$q', 'initFactory', 'localStorageService',
    function ($q, initFactory, localStorageService) {

      function reset() {
        var timerSets = initFactory;
        localStorageService.set(STORAGE_KEY, initFactory);
        return timerSets;
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
        reset: reset
      };

    }]);
  /*
   //
   //
   // app.factory('timerSetRepository', [
   //     'firebaseConfig', '$firebaseArray', '$firebaseObject', '$q',
   //     function (firebaseConfig, $firebaseArray, $firebaseObject, $q) {
   //
   //     function getAll() {
   //
   //
   //     }
   //
   //     // Overwrite EVERYTHING with the initial data
   //     function init(newSets) {
   //       var defer = $q.defer();
   //       getAll().then(function (timerSets) {
   //         angular.forEach(newSets, function (timerSet) {
   //           timerSets.$add(timerSet);
   //         });
   //         defer.resolve(timerSets.$loaded());
   //       }, function (err) {
   //         throw new Error('Unable to initialize new timer sets' + err);
   //       });
   //       return defer.promise;
   //     }
   //
   //     // Get a specific timer by id (which is the array index)
   //     function getSetById(id) {
   //       var defer = $q.defer();
   //       getReference().then(function (ref) {
   //         $firebaseObject(ref.child(id)).$loaded().then(function (a) {
   //           if (null !== a.$value) {
   //             return defer.resolve(a);
   //           }
   //           return defer.reject('Unknown timer set');
   //         });
   //       }, function (err) {
   //         throw new Error('Unable to get reference: ' + err);
   //       });
   //       return defer.promise;
   //     }
   //
   // return {
   // getAll: getAll,
   //       init: init,
   //       getSetById: getSetById
   // }
   // }]);
   */
}(window.angular.module('omtimer'));
