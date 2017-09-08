/******************************************************************************
 Normally, tests would appear in a separate file named
 test/test.js, but for our examples it's convenient to place this
 test code in the same JavaScript file as the code that calls it.
 ******************************************************************************/
$(document).ready(function () {

    var $body = $('body');
    $body.prepend($('<button class="loadScript" type="button">加载完整代码</button>'));
    $body.on('click', '.loadScript', function () {
        $.getScript('complete.js');
    })
});
