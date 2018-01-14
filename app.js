$('.accordion').on('click', '.accordionTitleDiv', function() {
    $('.accordion').find('.show').removeClass('show').addClass('hide');
    $(this).parent().find('.accordionContent').removeClass('hide').addClass('show');
});