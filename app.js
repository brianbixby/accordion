$('.accordion').on('click', '.accordionTitleDiv', function() {
    if($(this).parent().find('.accordionContent').hasClass('show')) {
        $(this).parent().find('.accordionContent').removeClass('show').addClass('hide');
    }
    else {
        $('.accordion').find('.show').removeClass('show').addClass('hide');
        $(this).parent().find('.accordionContent').removeClass('hide').addClass('show');
    }
});