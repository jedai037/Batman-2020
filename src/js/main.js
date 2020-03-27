$(function() {
    let tabsItem = $('.tabs-item');
    let more = $('.more');
    let content = $('.content');
    tabsItem.on('click', function(event) {
        event.preventDefault();
        let activeContent = $(this).attr('href');
        $('.visible').toggleClass('visible');
        $(activeContent).toggleClass('visible');
        $('.tabs-item__active').toggleClass('tabs-item__active');
        $(this).toggleClass('tabs-item__active');
        console.log(activeContent);
    });
    more.on('click', function() {
        $('.content').toggleClass('hidden', 'content');
        $('body, html').animate({scrollTop: $(content).offset().top}, 1000);   
    });
});