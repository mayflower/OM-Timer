!function (app) {
  'use strict';
  app.factory('phaseTemplate', function () {
    return {
      name: 'New phase',
      time: 30,
      alarmSound: 'bing1',
      selfStoppingSound: true
    }
  });
}(angular.module('omtimer'));
