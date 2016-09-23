!function (app) {
  'use strict';

  function convert(sec_num) {
    var hours = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);
    var formatted = [];

    if (hours > 0) {
      if (hours < 10) {
        hours = '0' + hours;
      }
      formatted.push(hours);
    }
    if (minutes < 10) {
      minutes = '0' + minutes;
    }
    formatted.push(minutes);
    if (seconds < 10) {
      seconds = '0' + seconds;
    }
    formatted.push(seconds);
    return formatted.join(':');
  }

  app.filter('secondsToTime', function () {
    return function (seconds) {
      return convert(parseInt(seconds, 10));
    };
  });
}(window.angular.module('omtimer'));