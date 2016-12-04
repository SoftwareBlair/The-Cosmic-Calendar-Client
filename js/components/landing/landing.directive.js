(function () {

  'use strict';

  angular
    .module('cosmicCalendar.components.landing')
    .directive('cdLanding', LandingDirective);

  LandingDirective.$inject = [];

  function LandingDirective () {
    return {
      restrict: 'E',
      templateUrl: './js/components/landing/landing.view.html',
      link: function () {
        $(function() {
          $('a.page-scroll').bind('click', function(e) {
            var $anchor = $(this);
            $('html, body').stop().animate({
              scrollTop: $($anchor.attr('href')).offset().top
            }, 1500, 'easeInOutExpo');
            e.preventDefault();
          });
        });
      }
    };
  }

})();
