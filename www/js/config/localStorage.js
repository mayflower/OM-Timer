!function (app) {
  'use strict';
  app.config(function (localStorageServiceProvider) {
    localStorageServiceProvider.setPrefix('omtimer.1');
  });
}(angular.module('omtimer'));
