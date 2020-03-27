$(function() {
    let tabsItem = $('.tabs-item');
    tabsItem.on('click', function(event) {
        event.preventDefault();
        let activeContent = $(this).attr('href');
        $('.visible').toggleClass('visible');
        $(activeContent).toggleClass('visible');
        $('.tabs-item__active').toggleClass('tabs-item__active');
        $(this).toggleClass('tabs-item__active');
        console.log(activeContent);
    });
});