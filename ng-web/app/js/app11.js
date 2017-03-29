'use strict';

/* App Module */
/**我们需要把phonecatServices添加到phonecat的依赖数组里。*/
var phonecatApp = angular.module('phonecatApp', [
    'ngRoute',
    'phonecatControllers',
    'phonecatFilters',
    'phonecatServices',
]);

phonecatApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/phones', {
                templateUrl: '../partials/phone-list10.html',
                controller: 'PhoneListCtrl'

                        }).
            when('/phones/:phoneId', {
                templateUrl: '../partials/phone-detail10.html',
                controller: 'PhoneDetailCtrl'
                     }).
            otherwise({
                redirectTo: '/phones'
                });
    }]);