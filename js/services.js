(function () {

  'use strict';

  angular
    .module('cosmicCalendar.services', [])
    .service('calendarService', calendarService);

  calendarService.$inject = ['$http'];

  function calendarService ($http) {
    /*jshint validthis: true */
    const getAllData = 'https://cosmic-calendar.herokuapp.com/api/v1/';
    const getAllMonths = 'https://cosmic-calendar.herokuapp.com/api/v1/months';
    const getAllEvents = 'https://cosmic-calendar.herokuapp.com/api/v1/events';

    this.getAllData = function  () {
      return $http.get(getAllData);
    };

    this.getAllMonths = function () {
      return $http.get(getAllMonths);
    };

    this.getAllEvents = function () {
      return $http.get(getAllEvents);
    };
  }

})();
