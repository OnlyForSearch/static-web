'use strict';

/**������Controllers */

var phonecatControllers = angular.module('phonecatControllers', []);
phonecatControllers.controller('PhoneListCtrl', ['$scope', 'Phone',
    function ($scope, Phone) {
        $scope.phones = Phone.query();
        $scope.orderProp = 'age';
    }]);
/**
 ע�⵽����PhoneListCtrl�����ǰѣ�

 $http.get('phones/phones.json').success(function(data) {
  $scope.phones = data;
});
 �����ˣ�

 $scope.phones = Phone.query();
 ������Phone����ķ��������ǲ�û�д����κλص������������⿴������
 ����ͬ�����صģ���ʵ�����Ͳ��ǡ���ͬ�����ص���һ����future������һ��
 ���󣬵�XHR��Ӧ���ص�ʱ����������ݡ�����AngularJS�����ݰ󶨣�����
 ����ʹ��future���Ұ����󶨵����ǵ�ģ���ϡ�Ȼ�󣬵����ݵ���ʱ�����ǵ�
 ��ͼ���Զ����¡�
 * */
phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone',
    function ($scope, $routeParams, Phone) {
        $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function (phone) {
            $scope.mainImageUrl = phone.images[0];
        });

        $scope.setImage = function (imageUrl) {
            $scope.mainImageUrl = imageUrl;
        };
    }]);