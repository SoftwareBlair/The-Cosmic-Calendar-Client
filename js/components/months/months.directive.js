(function () {

  'use strict';

  angular
    .module('cosmicCalendar.components.months')
    .directive('cdMonths', MonthsDirective);

  MonthsDirective.$inject = [];

  function MonthsDirective () {
    return {
      restrict: 'E',
      templateUrl: './js/components/months/months.view.html',
      controller: 'monthsController',
      controllerAs: 'monthsCtrl'
    };
  }

})();
