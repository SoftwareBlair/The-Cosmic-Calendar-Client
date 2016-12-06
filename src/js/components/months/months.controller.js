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
      this.allMonths = months.data.data;
      this.currentDaysMonth = null;
      this.currentMonth = null;

      this.getMonth = function (month) {
        console.log(month);
        let monthID = parseInt(month);
        this.allMonths.forEach((data) => {
          if (monthID === data.id) {
            this.currentMonth = data.month;
            this.currentDaysMonth = new Array(data.num_days);
          }
        });
        calendarService.getMonthEvents(monthID)
        .then((event) => {
          let monthEvents = event.data.data;
          let daysMonth = this.currentDaysMonth;

          this.getEvent = function (day) {
            monthEvents.forEach((data) => {
              if (day === data.day) {
                console.log(data);
              }
            });
          };
        });
      };
    })
    .catch(err => err);

    // calendarService.getAllEvents()
    // .then((events) => {
    //   this.allEvents = events.data.data;
    //
    //   this.getEvent = function (event) {
    //     event.forEach(data => console.log(data));
    //   };
    // })
    // .catch(err => err);

  }

})();
