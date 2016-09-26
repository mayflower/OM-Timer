!function (app) {
  'use strict';
  app.factory('initialTemplate', function () {
    return [
      {
        name: 'Debugging',
        phases: [
          {
            name: 'Phase 1',
            time: 5,
            alarmSound: 'bing2',
            selfStoppingSound: true
          },
          {
            name: 'Phase 2',
            time: 6,
            alarmSound: 'bing1',
            selfStoppingSound: true
          },
        ]
      },
      {
        name: 'Meditation',
        phases: [
          {
            name: 'Preparation',
            time: 2 * 60,
            alarmSound: 'bing2',
            selfStoppingSound: true
          },
          {
            name: 'Meditation',
            time: 13 * 60,
            alarmSound: 'bing2',
            selfStoppingSound: true
          },
          {
            name: 'Phase Out',
            time: 2 * 60,
            alarmSound: 'bing1',
            selfStoppingSound: true
          }
        ]
      },
      {
        name: 'Pyramid Training',
        phases: [
          {
            name: 'Warm up',
            time: 5 * 60,
            alarmSound: 'bing2',
            selfStoppingSound: true
          },
          {
            name: 'Race pace 1 min',
            time: 1 * 60,
            alarmSound: 'bing2',
            selfStoppingSound: true
          },
          {
            name: 'Slow pace',
            time: 2 * 60,
            alarmSound: 'bing1',
            selfStoppingSound: true
          },
          {
            name: 'Race pace 2 min',
            time: 2 * 60,
            alarmSound: 'bing2',
            selfStoppingSound: true
          },
          {
            name: 'Slow pace',
            time: 2 * 60,
            alarmSound: 'bing2',
            selfStoppingSound: true
          },
          {
            name: 'Race pace 3 min',
            time: 3 * 60,
            alarmSound: 'bing1',
            selfStoppingSound: true
          },
          {
            name: 'Slow pace',
            time: 2 * 60,
            alarmSound: 'bing1',
            selfStoppingSound: true
          },
          {
            name: 'Race pace 2 min',
            time: 2 * 60,
            alarmSound: 'bing2',
            selfStoppingSound: true
          },
          {
            name: 'Slow pace',
            time: 2 * 60,
            alarmSound: 'bing1',
            selfStoppingSound: true
          },
          {
            name: 'Race pace 1 min',
            time: 1 * 60,
            alarmSound: 'bing2',
            selfStoppingSound: true
          },
          {
            name: 'Cool down',
            time: 3 * 60,
            alarmSound: 'bing1',
            selfStoppingSound: true
          }
        ]
      },
      {
        name: 'Lean Coffee',
        phases: [
          {
            name: 'Topic 1',
            time: 5 * 60,
            alarmSound: 'bing1',
            selfStoppingSound: true
          },
          {
            name: 'Topic 2',
            time: 5 * 60,
            alarmSound: 'bing1',
            selfStoppingSound: true
          },
          {
            name: 'Topic 3',
            time: 5 * 60,
            alarmSound: 'bing1',
            selfStoppingSound: true
          },
          {
            name: 'Topic 4',
            time: 5 * 60,
            alarmSound: 'bing1',
            selfStoppingSound: true
          },
          {
            name: 'Topic 5',
            time: 5 * 60,
            alarmSound: 'bing1',
            selfStoppingSound: true
          },
          {
            name: 'Topic 6',
            time: 5 * 60,
            alarmSound: 'bing1',
            selfStoppingSound: true
          }
        ]
      },
      {
        name: 'Pomodoro',
        phases: [
          {
            name: 'Work',
            time: 25 * 60,
            alarmSound: 'bing1',
            selfStoppingSound: true
          },
          {
            name: 'Relax',
            time: 5 * 60,
            alarmSound: 'bing1',
            selfStoppingSound: true
          },
          {
            name: 'Work',
            time: 25 * 60,
            alarmSound: 'bing1',
            selfStoppingSound: true
          },
          {
            name: 'Relax',
            time: 5 * 60,
            alarmSound: 'bing1',
            selfStoppingSound: true
          },
          {
            name: 'Work',
            time: 25 * 60,
            alarmSound: 'bing1',
            selfStoppingSound: true
          },
          {
            name: 'Relax',
            time: 5 * 60,
            alarmSound: 'bing1',
            selfStoppingSound: true
          },
          {
            name: 'Work',
            time: 25 * 60,
            alarmSound: 'bing1',
            selfStoppingSound: true
          },
          {
            name: 'Relax',
            time: 5 * 60,
            alarmSound: 'bing1',
            selfStoppingSound: true
          }
        ]
      }
    ]
  });
}(angular.module('omtimer'));
