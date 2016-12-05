(function() {

  'use strict';

  angular
    .module('cosmicCalendar.config', [])
    .config(appConfig);

  function appConfig ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '../index.html'
      })
      .otherwise({
        redirectTo: '/'
      });

  }

})();
