var Events = require("../models/event");

    $scope.eventSources = [];

    myAppModule.controller('MyController', function($scope) {
    /* config object */
    $scope.uiConfig = {
      calendar:{
        height: 450,
        editable: true,
        header:{
          left: 'month basicWeek basicDay agendaWeek agendaDay',
          center: 'title',
          right: 'today prev,next'
        },
        dayClick: $scope.alertEventOnClick,
        eventDrop: $scope.alertOnDrop,
        eventResize: $scope.alertOnResize
      }
    };
});

<div ui-calendar="uiConfig.calendar" ng-model="eventSources">
    
    
