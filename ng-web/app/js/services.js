'use strict';

/* Services */

var phonecatServices = angular.module('phonecatServices', ['ngResource']);



phonecatServices.factory('Phone', ['$resource',
    function ($resource) {
        return $resource('../phones/:phoneId.json', {}, {
            query: {method: 'GET', params: {phoneId: 'phones'}, isArray: true}
        });
    }]);

/**
 我们使用模块API通过一个工厂方法注册了一个定制服务。我们传入服务的名字Phone和工厂函数
 。工厂函数和控制器构造函数差不多，它们都通过函数参数声明依赖服务。Phone服务声明了它依
 赖于$resource服务。

 $resource服务使得用短短的几行代码就可以创建一个RESTful客户端。我们的应用使用这个客户
 端来代替底层的$http服务。
 * */