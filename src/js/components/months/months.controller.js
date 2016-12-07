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

          for (let i = 0; i < monthEvents.length; i++) {
            this.currentDaysMonth.splice(monthEvents[i].day - 1, 1, monthEvents[i]);
          }

          this.closeNav = () => {
            document.getElementById("overlayData").style.width = "0%";
          };

          this.getEvent = (day) => {
            document.getElementById("overlayData").style.width = "100%";

            this.singleDayEvents = [];
            monthEvents.forEach(data => {
              if (day === data.day) {
                this.singleDayEvents.push(data);
              }
            });
            console.log(this.singleDayEvents);
          };
        });
      };
    })
    .catch(err => err);

  }

})();
