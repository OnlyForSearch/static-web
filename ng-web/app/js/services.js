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
 ����ʹ��ģ��APIͨ��һ����������ע����һ�����Ʒ������Ǵ�����������Phone�͹�������
 �����������Ϳ��������캯����࣬���Ƕ�ͨ����������������������Phone��������������
 ����$resource����

 $resource����ʹ���ö̶̵ļ��д���Ϳ��Դ���һ��RESTful�ͻ��ˡ����ǵ�Ӧ��ʹ������ͻ�
 ��������ײ��$http����
 * */