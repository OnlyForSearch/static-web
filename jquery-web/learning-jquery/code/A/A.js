// This is the custom JavaScript file referenced by index.html. You will notice
// that this file is currently empty. By adding code to this empty file and
// then viewing index.html in a browser, you can experiment with the example
// page or follow along with the examples in the book.
//
// See README.txt for more information.
$(document).ready(function () {

    var $body = $('body');
    $body.prepend($('<button class="loadScript" type="button">加载完整代码</button>'));
    $body.on('click', '.loadScript', function () {
        $.getScript('complete.js');
    })
});


