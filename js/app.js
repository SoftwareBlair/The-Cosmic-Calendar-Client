// sample angular code

(function() {

  'use strict';

  angular
    .module('cosmicCalendar', [
      'cosmicCalendar.config',
      'cosmicCalendar.services',
      'cosmicCalendar.components.navigation',
      'cosmicCalendar.components.main',
      'cosmicCalendar.components.timeline',
      'cosmicCalendar.components.footer'
    ]);

})();
