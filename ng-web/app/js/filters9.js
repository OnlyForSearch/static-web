
/**我们的过滤器命名为checkmark。它的输入要么是true，要么是false，并且我们返回两个表示true
 * 或false的unicode字符（\u2713和\u2718）。*/
angular.module('phonecatFilters', []).filter('checkmark', function () {
    return function (input) {
        return input ? '\u2713' : '\u2718';
    };
});