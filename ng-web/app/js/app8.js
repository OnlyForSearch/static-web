'use strict';

/* App Module */

var phonecatApp = angular.module('phonecatApp', [
    'ngRoute',
    'phonecatControllers'
]);
/**并且通过使用configAPI，我们请求把$routeProvider注入到我们的配置函数并且使
 * 用$routeProvider.whenAPI来定义我们的路由规则。
 * */
phonecatApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/phones', {
                templateUrl: '../partials/phone-list8.html',
                controller: 'PhoneListCtrl'

                /**当URL 映射段为/phones时，手机列表视图会被显示出来。为了构造这个视图，
                 * AngularJS会使用phone-list.html模板和PhoneListCtrl控制器。*/
            }).
            when('/phones/:phoneId', {
                templateUrl: '../partials/phone-detail8.html',
                controller: 'PhoneDetailCtrl'
                /**
                 当URL 映射段为/phone/:phoneId时，手机详细信息视图被显示出来。这里:phoneId是URL的变
                 量部分。为了构造手机详细视图，AngularJS会使用phone-detail
                 .html模板和PhoneDetailCtrl控制器。
                 * */
            }).
            otherwise({
                redirectTo: '/phones'
                /**$route.otherwise({redirectTo: '/phones'})语句使得当浏览器地址不能匹配我们任何一
                 * 个路由规则时，触发重定向到/phones。*/
            });
    }]);