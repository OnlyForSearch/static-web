'use strict';

/* App Module */
/**�������ǵĹ�����׼�����ˣ�������Ҫ�����ǵ�phonecatFiltersģ����Ϊ
 * һ������ע�ᵽ���ǵ���ģ��phonecat�ϡ�*/
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