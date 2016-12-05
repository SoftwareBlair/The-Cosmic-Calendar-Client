(function() {

  'use strict';

  angular
    .module('cosmicCalendar.components.months', [])
    .controller('monthsController', monthsController);

  monthsController.$inject = ['$scope'];

  function monthsController($scope) {
    /*jshint validthis: true */
    this.greeting = 'Hello World!';
  }

})();
