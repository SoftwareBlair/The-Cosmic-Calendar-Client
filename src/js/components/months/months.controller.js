(function() {

  'use strict';

  angular
    .module('cosmicCalendar.components.months', [])
    .controller('monthsController', monthsController);

  monthsController.$inject = ['calendarService'];

  function monthsController(calendarService) {
    /*jshint validthis: true */
    calendarService.getAllMonths()
    .then(months => {
      this.allMonths = months;
      this.currentDaysMonth = null;
      this.currentMonth = null;
      this.monthHasEvents = false;
      this.dayHasEvents = false;

      this.getMonth = (month) => {
        let monthID = parseInt(month);
        this.allMonths.forEach(data => {
          if (monthID === data.id) {
            this.currentMonth = data.month;
            this.currentDaysMonth = new Array(data.num_days);
          }
        });

        calendarService.getMonthEvents(monthID)
        .then(event => {
          let monthEvents = event;

          this.getEvent = (day) => {
            monthEvents.forEach(data => {
              if (day === data.day) {
                console.log(data);
              }
            });
          };
        });
      };
    })
    .catch(err => err);

  }

})();
