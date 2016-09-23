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
            controller: 'DashboardController'
          }
        }
      })
      .state('app.edit-timer-set', {
        url: '/timer-set/:id',
        views: {
          'menuContent': {
            templateUrl: 'templates/timer-set.html',
            controller: 'EditTimerSetController'
          }
        },
        resolve: {
          index: ['$stateParams', function ($stateParams) {
            return $stateParams.id
          }],
          timerSet: ['timerSetRepository', '$stateParams', function (timerSetRepository, $stateParams) {
            return timerSetRepository.getByIndex($stateParams.id);
          }]
        }
      })
      .state('app.phase-edit', {
        url: '/timer-set/:timerSetId/phase/:phaseId',
        views: {
          'menuContent': {
            templateUrl: 'templates/phase.html',
            controller: 'EditPhaseController'
          }
        },
        resolve: {
          timerSetId: ['$stateParams', function ($stateParams) {
            return $stateParams.timerSetId
          }],
          phaseId: ['$stateParams', function ($stateParams) {
            return $stateParams.phaseId
          }],
          timerSet: ['timerSetRepository', '$stateParams', function (timerSetRepository, $stateParams) {
            return timerSetRepository.getByIndex($stateParams.timerSetId);
          }]
        }
      })
      .state('app.count-down', {
        url: '/count-down/:id',
        views: {
          'menuContent': {
            templateUrl: 'templates/countdown.html',
            controller: 'CountDownController'
          }
        },
        resolve: {
          timerSet: ['timerSetRepository', '$stateParams', function (timerSetRepository, $stateParams) {
            return timerSetRepository.getByIndex($stateParams.id);
          }]
        }
      })
      .state('reset', {
        url: '/reset',
        onEnter: ['$state', 'timerSetRepository', function ($state, timerSetRepository) {
          if (confirm('Really reset all data?')) {
            timerSetRepository.reset();
          }
          $state.go('app.timerSets');
        }]
      });
    $urlRouterProvider.otherwise('/app/timer-sets');
  });
}(angular.module('omtimer'));
