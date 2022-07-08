$(function () {
    function scrollside() {
        var scroll = $(window).scrollTop() + $(window).outerHeight() - 100
        console.log(scroll)
        $(".scollnep").each(function (index) {
            $(this).toggleClass("is-nep", !!(scroll >= $(this).offset().top))
        });
    }
    $(window).scroll(function () {
        scrollside()
    })
    scrollside()
})