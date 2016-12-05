(function() {

  'use strict';

  angular
    .module('cosmicCalendar.config', [])
    .config(appConfig);

  function appConfig ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'js/components/months/months.view.html',
        controller: 'monthsController',
        controllerAs: 'monthsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

  }

})();
