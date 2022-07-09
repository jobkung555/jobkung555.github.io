$(function () {
    function scrollside() {
        var scroll = $(window).scrollTop() 
        let scrollarea = scroll + $(window).outerHeight() - 100
        $(".scollnep").each(function () {
            $(this).toggleClass("is-nep", !!(scrollarea >= $(this).offset().top))
        });
        $(".nav-link").each(function (index) {
            let sectop = $($(this).attr("href")).offset().top - 100
            let secbot = $($(this).attr("href")).offset().top + $($(this).attr("href")).height()
            $(this).toggleClass("active", !!(sectop < scroll && scroll < secbot))
        });
    }
    $(window).scroll(function () {
        scrollside()
    })
    scrollside()

    $(".nav-link").click(function (e) {
        e.preventDefault()
        $("html,body").animate({ scrollTop: $($(this).attr("href")).offset().top });
    })
    $(".header .icon-menu").click(function (e) {
        $(".header .menu").toggleClass("active")
    })
})