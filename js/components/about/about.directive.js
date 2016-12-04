(function () {

  'use strict';

  angular
    .module('cosmicCalendar.components.about')
    .directive('cdAbout', AboutDirective);

  AboutDirective.$inject = [];

  function AboutDirective () {
    return {
      restrict: 'E',
      templateUrl: './js/components/about/about.view.html'
    };
  }

})();
