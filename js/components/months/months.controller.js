(function() {

  'use strict';

  angular
    .module('cosmicCalendar.components.months', [])
    .controller('monthsController', monthsController);

  monthsController.$inject = ['$scope', 'calendarService'];

  function monthsController($scope, calendarService) {
    /*jshint validthis: true */
    calendarService.getAllMonths()
    .then(months => {
      this.months = months.data.data;
      this.currentDaysMonth = null;

      this.getMonth = function (month) {
        let monthID = parseInt(month);
        this.months.forEach((data) => {
          if (monthID === data.id) {
            this.currentDaysMonth = new Array(data.num_days);
          }
        });
      };

    })
    .catch(err => console.log(err));

    calendarService.getAllEvents()
    .then(events => console.log(events.data.data))
    .catch(err => console.log(err));
  }

})();
