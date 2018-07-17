
/*** Header fixed ***/
$(window).scroll(function () {
    scroll_pixel = $(window).scrollTop();
    ((scroll_pixel < 50) ? $('header').removeClass('navbar-fixed-top') : $('header').addClass('navbar-fixed-top'));
});

/*** Header nav toggle for responsive   ***/
$(".navbar-toggle").click(function () {
    $(this).toggleClass("navbar-close");
    $("#navigation-bar").slideToggle(200);
});

var screen_width = $(window).width();
if (screen_width < 767) {
    $('.nav > li > div').hide();
    $('.nav > li.parent > a').click(function (event) {
        event.preventDefault();
        $(this).closest(".nav > li.parent").find('> div').slideToggle('slow');
        $(this).toggleClass('open_filter');
    });

    $('.second_sub_nav').hide();
    $('.nav .nav-column li.submenu a').click(function (event) {
        if (!$(this).parent().parent().parent().hasClass("second_sub_nav")) {
            event.preventDefault();
            //$(this).closest(".nav .nav-column li.submenu").find('.second_sub_nav').slideToggle('slow');
            $(this).siblings().slideToggle('slow');
            $(this).parent().toggleClass('close_service');
            $(this).parent().parent().toggleClass('open_second_sub_nav');
        }
    });

}

/*** Insights blog toggle ***/
$('.filter_id').hide();
$('.filter_btn').click(function (event) {
    event.preventDefault();
    $(".selected_type").slideToggle('slow');
    $(".filter_id").slideToggle('slow');
    //$(this).siblings(".filter_type").find(".selected_type").slideToggle('slow');
    //$(this).siblings(".filter_type").find(".filter_id").slideToggle('slow');
    $(this).parent().toggleClass('open_filter');
});

/*** Sitemap toggle ***/
$('.sitemap_col ul li  ul').hide();
$('.sitemap_col ul li.parent_map a').click(function (event) {
    //event.preventDefault();
    $(this).siblings(".sitemap_col ul li.parent_map > ul").slideToggle('slow');
    $(this).parent().toggleClass('open_sitemap');
});





