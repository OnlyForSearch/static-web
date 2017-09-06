$(document).ready(function () {

    $(".book-container>li>:header").on("click", function () {
            $(this).next().toggle();
    });

    $('.book-container a').on('click', function (event) {
        event.preventDefault();
        var href = $(this).attr("href");
        window.frames['loadContents'].location.href = href
    });
});
