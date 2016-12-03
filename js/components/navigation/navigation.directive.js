(function () {

  'use strict';

  angular
    .module('cosmicCalendar.components.navigation')
    .directive('cdNavigation', NavigationDirective);

  NavigationDirective.$inject = [];

  function NavigationDirective () {
    return {
      restrict: 'E',
      templateUrl: './js/components/navigation/navigation.view.html'
    };
  }

})();
