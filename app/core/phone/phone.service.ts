'use strict';

angular.
  module('core.phone').
  factory('Phone', ['$resource',
    function($resource: angular.resource.IResourceService) {
      return $resource('phones/:phoneId.json', {}, {
        query: {
          method: 'GET',
          params: {phoneId: 'phones'},
          isArray: true
        }
      });
    }
  ]);
// use the factory function to register a custom service
// inputs to the function include the name of the service and the factory function
// factory function is similar to a controller's constructor
  // both can declare dependencies to be injected via function arguments
  // phone service declares dependency on $resource service
  // use $resource service to create a RESTful client
  // use client instead of $http service