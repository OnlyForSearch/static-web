'use strict';

/**控制器Controllers */

var phonecatControllers = angular.module('phonecatControllers', []);
phonecatControllers.controller('PhoneListCtrl', ['$scope', 'Phone',
    function ($scope, Phone) {
        $scope.phones = Phone.query();
        $scope.orderProp = 'age';
    }]);
/**
 注意到，在PhoneListCtrl里我们把：

 $http.get('phones/phones.json').success(function(data) {
  $scope.phones = data;
});
 换成了：

 $scope.phones = Phone.query();
 当调用Phone服务的方法是我们并没有传递任何回调函数。尽管这看起来结
 果是同步返回的，其实根本就不是。被同步返回的是一个“future”——一个
 对象，当XHR相应返回的时候会填充进数据。鉴于AngularJS的数据绑定，我们
 可以使用future并且把它绑定到我们的模板上。然后，当数据到达时，我们的
 视图会自动更新。
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