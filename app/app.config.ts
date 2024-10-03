'use strict';

angular.
  module('phonecatApp').
  config(['$routeProvider',
    function config($routeProvider: angular.route.IRouteProvider) { //inject necessary providers into config function
      $routeProvider. //use provider's methods to specify the behavior we wnat for the corresponding service
        when('/phones', {
          template: '<phone-list></phone-list>'
        }).
        when('/phones/:phoneId', { //all variables with the : prefix are extracted into the $routeParams object
          template: '<phone-detail></phone-detail>'
        }).
        otherwise('/phones');
    }
  ]);
