(function () {

  'use strict';

  angular
    .module('cosmicCalendar.components.footer')
    .directive('cdFooter', FooterDirective);

  FooterDirective.$inject = [];

  function FooterDirective () {
    return {
      restrict: 'E',
      templateUrl: './js/components/footer/footer.view.html'
    };
  }

})();
