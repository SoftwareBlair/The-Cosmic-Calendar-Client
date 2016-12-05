// sample angular code

(function() {

  'use strict';

  angular
    .module('cosmicCalendar', [
      'ngRoute',
      'cosmicCalendar.config',
      'cosmicCalendar.services',
      'cosmicCalendar.components.navigation',
      'cosmicCalendar.components.landing',
      'cosmicCalendar.components.about',
      'cosmicCalendar.components.months',
      'cosmicCalendar.components.share',
      'cosmicCalendar.components.footer'
    ]);

})();
