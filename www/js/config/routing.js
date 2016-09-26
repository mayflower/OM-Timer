!function (app) {
  'use strict';
  app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppController'
      })
      .state('app.timerSets', {
        url: '/timer-sets',
        views: {
          'menuContent': {
            templateUrl: 'templates/timer-sets.html',
            controller: 'TimerSetsController'
          }
        }
      })
      .state('app.timerSetEdit', {
        url: '/timer-set/:timerSetId',
        views: {
          'menuContent': {
            templateUrl: 'templates/timer-set.html',
            controller: 'TimerSetController'
          }
        },
        resolve: {
          timerSetId: ['$stateParams', function ($stateParams) {
            return $stateParams.timerSetId
          }]
        }
      })
      .state('app.phaseEdit', {
        url: '/timer-set/:timerSetId/phase/:phaseId',
        views: {
          'menuContent': {
            templateUrl: 'templates/phase.html',
            controller: 'PhaseController'
          }
        },
        resolve: {
          timerSetId: ['$stateParams', function ($stateParams) {
            return $stateParams.timerSetId
          }],
          phaseId: ['$stateParams', function ($stateParams) {
            return $stateParams.phaseId
          }]
        }
      })
      .state('app.countDown', {
        url: '/count-down/:timerSetId',
        views: {
          'menuContent': {
            templateUrl: 'templates/countdown.html',
            controller: 'CountDownController'
          }
        },
        resolve: {
          timerSetId: ['$stateParams', function ($stateParams) {
            return $stateParams.timerSetId;
          }]
        },
        onEnter: ['$state', 'localStorageService', 'timerSetId', function ($state, localStorageService, timerSetId) {
          var timerSet = localStorageService.get('timerSets')[timerSetId];
          if (!angular.isDefined(timerSet.phases) || timerSet.phases.length === 0) {
            alert('Missing timer phases. Please add them.');
            $state.go('app.timerSets');
            return false;
          }
        }]
      })
      .state('app.info', {
        url: '/info',
        views: {
          'menuContent': {
            templateUrl: 'templates/info.html'
          }
        }
      })
      .state('app.reset', {
        url: '/reset',
        onEnter: ['$state', 'localStorageService', 'initFactory', '$timeout',
          function ($state, localStorageService, initFactory, $timeout) {
            if (confirm('Really reset all data?')) {
              localStorageService.set('timerSets', initFactory);
            }
            $timeout(function () {
              $state.go('app.timerSets', {reload: true});
            }, 1000);
          }]
      });

    $urlRouterProvider.otherwise('/app/timer-sets');
  });
}(angular.module('omtimer'));
