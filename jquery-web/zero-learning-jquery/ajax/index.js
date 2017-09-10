var count=0;
$(document).ready(function () {

    console.log(this.tagName);

    $('.mode').click(function () {
        $(".log ol").empty();
    });

    $('.trigger').click(function () {

        $('.result').load('f1.html');
    });
    $('.triggerError').click(function () {

        $('.result').load('f1_missing.html');
    });
    $('.triggerAjax').click(function () {

        $.ajax({
            url: "f1.html"
        }).done(function (data, textStatus, jqXHR) {//success
            console.log('data:' + JSON.stringify(data) + '');
            console.log('textStatus:' + JSON.stringify(textStatus) + '');
            console.log(' jqXHR:' + JSON.stringify(jqXHR));

            console.log('=================done=======================');
            logAjaxOrder('done');

        }).fail(function (jqXHR, textStatus, errorThrown) {//error
            console.log('textStatus:' + JSON.stringify(textStatus) + '');
            console.log(' jqXHR:' + JSON.stringify(jqXHR));

            console.log('errorThrown:' + JSON.stringify(errorThrown) + '');
            console.log('=================fail=======================');
            logAjaxOrder('fail');


        })

            .always(function (data , textStatus, errorThrown) {//complete

            console.log('data:' + JSON.stringify(data) + '');
            console.log(' textStatus:' + JSON.stringify(textStatus));

            console.log('errorThrown:' + JSON.stringify(errorThrown) + '');
            console.log('=================always=======================');
            logAjaxOrder('always');

        })
        ;

        ;
    });

}).ajaxStart(function () {

    console.log('=================ajaxStart=======================');
    logAjaxOrder('ajaxStart');

}).ajaxSend(function (event, jqXHR, ajaxOptions) {
    console.log('event:' + JSON.stringify(event) + '');
    console.log('jqXHR:' + JSON.stringify(jqXHR) + '');
    console.log(' ajaxSettings:' + JSON.stringify(ajaxOptions));
    console.log('=================ajaxSend=======================');
    logAjaxOrder('ajaxSend');


}).ajaxSuccess(function (event, jqXHR, ajaxOptions) {
    console.log('event:' + JSON.stringify(event) + '');
    console.log('jqXHR:' + JSON.stringify(jqXHR) + '');
    console.log(' ajaxSettings:' + JSON.stringify(ajaxOptions));

    console.log('=================ajaxSuccess=======================');
    logAjaxOrder('ajaxSuccess');


}).ajaxError(function (event, jqXHR, ajaxSettings, thrownError) {
    console.log('event:' + JSON.stringify(event) + '');
    console.log('jqXHR:' + JSON.stringify(jqXHR) + '');
    console.log(' ajaxSettings:' + JSON.stringify(ajaxSettings));
    console.log(' thrownError:' + JSON.stringify(thrownError));
    console.log('=================ajaxError===============================');
    logAjaxOrder('ajaxError');
}).ajaxComplete(function (event, xhr, settings) {

    console.log('event:' + JSON.stringify(event) + '');
    console.log('xhr:' + JSON.stringify(xhr) + '');
    console.log(' settings:' + JSON.stringify(settings));
    console.log('=================ajaxComplete=======================');
    logAjaxOrder('ajaxComplete');
}).ajaxStop(function () {
    console.log('=================ajaxStop=======================');
    logAjaxOrder('ajaxStop');

});

function logAjaxOrder(ajaxFn) {
    $(".log ol").append('<li>' + ajaxFn + '</li>');

}
