(function () {

  'use strict';

  angular
    .module('cosmicCalendar.components.share')
    .directive('cdShare', ShareDirective);

  ShareDirective.$inject = [];

  function ShareDirective () {
    return {
      restrict: 'E',
      templateUrl: './js/components/share/share.view.html'
    };
  }

})();
