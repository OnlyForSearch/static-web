
/**���ǵĹ���������Ϊcheckmark����������Ҫô��true��Ҫô��false���������Ƿ���������ʾtrue
 * ��false��unicode�ַ���\u2713��\u2718����*/
angular.module('phonecatFilters', []).filter('checkmark', function () {
    return function (input) {
        return input ? '\u2713' : '\u2718';
    };
});