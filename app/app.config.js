'use strict';
angular.
    module('phonecatApp').
    config(['$routeProvider',
    function config($routeProvider) {
        $routeProvider. //use provider's methods to specify the behavior we wnat for the corresponding service
            when('/phones', {
            template: '<phone-list></phone-list>'
        }).
            when('/phones/:phoneId', {
            template: '<phone-detail></phone-detail>'
        }).
            otherwise('/phones');
    }
]);
//# sourceMappingURL=app.config.js.map