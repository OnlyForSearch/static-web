'use strict';

/* App Module */

var phonecatApp = angular.module('phonecatApp', [
    'ngRoute',
    'phonecatControllers'
]);
/**����ͨ��ʹ��configAPI�����������$routeProviderע�뵽���ǵ����ú�������ʹ
 * ��$routeProvider.whenAPI���������ǵ�·�ɹ���
 * */
phonecatApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/phones', {
                templateUrl: '../partials/phone-list8.html',
                controller: 'PhoneListCtrl'

                /**��URL ӳ���Ϊ/phonesʱ���ֻ��б���ͼ�ᱻ��ʾ������Ϊ�˹��������ͼ��
                 * AngularJS��ʹ��phone-list.htmlģ���PhoneListCtrl��������*/
            }).
            when('/phones/:phoneId', {
                templateUrl: '../partials/phone-detail8.html',
                controller: 'PhoneDetailCtrl'
                /**
                 ��URL ӳ���Ϊ/phone/:phoneIdʱ���ֻ���ϸ��Ϣ��ͼ����ʾ����������:phoneId��URL�ı�
                 �����֡�Ϊ�˹����ֻ���ϸ��ͼ��AngularJS��ʹ��phone-detail
                 .htmlģ���PhoneDetailCtrl��������
                 * */
            }).
            otherwise({
                redirectTo: '/phones'
                /**$route.otherwise({redirectTo: '/phones'})���ʹ�õ��������ַ����ƥ�������κ�һ
                 * ��·�ɹ���ʱ�������ض���/phones��*/
            });
    }]);