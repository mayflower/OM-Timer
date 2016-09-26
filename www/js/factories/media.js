!function (app) {
  'use strict';
  app.factory('Media', [
    '$window', '$cordovaNativeAudio', '$ionicPlatform',
    function ($window, $cordovaNativeAudio, $ionicPlatform) {

      var internalSounds = [];
      var sounds = ['bing1', 'bing2', 'horn'];
      var native;
      var i;

      $ionicPlatform.ready(function () {
        native = angular.isDefined($window.plugins) && angular.isDefined($window.plugins.NativeAudio);
        for (i in sounds) {
          if (sounds.hasOwnProperty(i)) {
            var sound = sounds[i];
            internalSounds[sound] = native ? prepareNative(sound) : prepareBrowser(sound);
          }
        }
      });

      function fullSoundPath(sound) {
        return 'sounds/' + sound + '.mp3';
      }

      function prepareBrowser(sound) {
        return new Audio(fullSoundPath(sound));
      }

      function prepareNative(sound) {
        return $cordovaNativeAudio.preloadSimple(sound, fullSoundPath(sound)).then(function (msg) {
          console.log(msg);
        }, function (error) {
          console.error(error);
        });
      }

      function play(sound) {
        if (!angular.isDefined(internalSounds[sound])) {
          throw 'Sound ' + sound + ' is not prepared. Enter in MediaFactory';
        }

        if (native) {
          $cordovaNativeAudio.play(sound);
        } else {
          internalSounds[sound].play();
        }
      }

      return {
        play: play
      };
    }])
}(window.angular.module('omtimer'));
