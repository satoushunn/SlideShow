$(function() {
    let images = 0;
    $('#slide_btn .next').click(function(){
        images ++;
        if (images < 4) {
            let data = $(this).data('next');
            $('.yamagata').animate({
                left : images * -640
            });
        } else {
            images = 0;
            $('.yamagata').animate({
                left : -40
            });
        }
    });

    $('#slide_btn .back').click(function(){
        images --;
        if (images == -1) {
            let data = $(this).data('back');
            $('.yamagata').animate({
                left : -1920
            });
        } else {
            let data = $(this).data('back');
        $('.yamagata').animate({
                left : images *640
            });       
        }
    });
});