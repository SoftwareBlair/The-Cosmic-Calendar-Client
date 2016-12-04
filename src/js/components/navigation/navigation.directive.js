(function () {

  'use strict';

  angular
    .module('cosmicCalendar.components.navigation')
    .directive('cdNavigation', NavigationDirective);

  NavigationDirective.$inject = [];

  function NavigationDirective () {
    return {
      restrict: 'EA',
      templateUrl: './js/components/navigation/navigation.view.html',
      link: function () {
        // Collapse Navigation on scrolling
        function collapseNavbar() {
          if ($('.navbar').offset().top > 50) {
            $('.navbar-fixed-top').addClass('top-nav-collapse');
          }
          else {
            $('.navbar-fixed-top').removeClass('top-nav-collapse');
          }
        }

        $(window).scroll(collapseNavbar);
        $(document).ready(collapseNavbar);

        $(function() {
          $('a.page-scroll').bind('click', function(e) {
            var $anchor = $(this);
            $('html, body').stop().animate({
              scrollTop: $($anchor.attr('href')).offset().top
            }, 1500, 'easeInOutExpo');
            e.preventDefault();
          });
        });

        // Closes Menu on click
        $('.navbar-collapse ul li a').click(function() {
          $(this).closest('.collapse').collapse('toggle');
        });
      }
    };
  }

})();
