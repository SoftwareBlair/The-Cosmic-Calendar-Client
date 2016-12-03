(function () {

  'use strict';

  angular
    .module('cosmicCalendar.components.landing')
    .directive('cdLanding', LandingDirective);

  LandingDirective.$inject = [];

  function LandingDirective () {
    return {
      restrict: 'E',
      templateUrl: './js/components/landing/landing.view.html'
    };
  }

})();
