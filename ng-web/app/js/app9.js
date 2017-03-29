'use strict';

/* App Module */
/**现在我们的过滤器准备好了，我们需要将我们的phonecatFilters模块作为
 * 一个依赖注册到我们的主模块phonecat上。*/
var phonecatApp = angular.module('phonecatApp', [
    'ngRoute',
    'phonecatControllers',
    'phonecatFilters',
]);

phonecatApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/phones', {
                templateUrl: '../partials/phone-list9.html',
                controller: 'PhoneListCtrl'

                        }).
            when('/phones/:phoneId', {
                templateUrl: '../partials/phone-detail9.html',
                controller: 'PhoneDetailCtrl'
                     }).
            otherwise({
                redirectTo: '/phones'
                });
    }]);